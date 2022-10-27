import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowCircleRight, } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const CoursesDe = () => {

    const [catago, setCatago] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-cat')
            .then(res => res.json())
            .then(data => setCatago(data));

    }, [])

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    catago.map(category =>
                        <Col >
                            <Card key={category.id} style={{ width: '25rem', height: 'auto' }} >

                                <Card.Img style={{ height: '10rem', width: '100 %' }} src={category.photo_url} />
                                <Card.Body>
                                    <Card.Title className='text-info'>{category.name}</Card.Title>
                                    <Card.Text className='pb-4'>{category.heading}
                                    </Card.Text>
                                    <div className=' d-grid'> <Link to={`/details/${category.id}`}><Button size="lg" variant="outline-info bottom" style={{ position: 'absolute', bottom: '0', }} >Course Details <FaArrowCircleRight></FaArrowCircleRight></Button>
                                    </Link></div>
                                </Card.Body>

                            </Card></Col>)
                }
            </Row>

        </div>
    );
};

export default CoursesDe;