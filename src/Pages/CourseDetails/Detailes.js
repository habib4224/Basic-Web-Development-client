import React from 'react';
import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaClock, FaRegFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';


const Detailse = () => {

    const coursess = useLoaderData();


    const componentRef = useRef();
    const handlebtn = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${coursess.name}`,
        onAfterPrint: () => alert('Downloaded')

    })
    return (
        <Container ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>

            <Card style={{ width: '70%', height: 'auto' }} >

                <Card.Header className='mb-2 d-flex justify-content-between '>
                    <div className='text-info'>
                        <Card.Title>{coursess.name}</Card.Title></div>
                    <div>
                        <Card.Text className='text-info'><FaClock></FaClock>
                            {coursess.duraion}
                        </Card.Text>
                    </div>
                    <div>
                        <div>
                            {['right'].map((placement) => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={

                                        <Tooltip id={`tooltip-${placement}`}>
                                            <span>Downloade</span>
                                        </Tooltip>

                                    }
                                >
                                    <button onClick={handlebtn} className='btn btn-outline-light'>
                                        <h3><FaRegFilePdf className='text-info text-large'> </FaRegFilePdf></h3>
                                    </button>
                                </OverlayTrigger>
                            ))}
                        </div>


                    </div>
                </Card.Header>

                <Card.Text className=' px-4'>
                    <h2 >Course Details of: <span className='text-info'>{coursess.name}</span></h2>
                </Card.Text>
                <Card.Img className='course_img p-4' variant="top" src={coursess.photo_url} />
                <Card.Body>
                    <Card.Text>
                        {coursess.description}
                    </Card.Text>
                    <Link to={`/cart/${coursess.id}`}><Button variant="info bottom"> Premium Access</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Detailse;

