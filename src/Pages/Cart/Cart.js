import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaClock } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Cart = ({ children }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const cour = useLoaderData();
    return (
        <Container>
            <div className='text-warning'><h3>Cart</h3></div>
            <Card >
                <Card.Header className='mb-2 d-flex justify-content-between '>
                    <div className='text-info'><Card.Title>{cour.name}</Card.Title></div>
                    <div>
                        <Card.Text className='text-info'><FaClock></FaClock>
                            {cour.duraion}
                        </Card.Text>
                    </div>
                </Card.Header>
                <Card.Text>
                    <h1 className='text-info px-4'> Course Id:{cour.id} </h1>
                </Card.Text>
                <Card.Text>
                    <h3 className='text-info px-4'>User Email: {user?.email}</h3>
                </Card.Text>
                <Card.Text>
                    <h3 className='text-info px-4'>User Name: {user?.displayName}</h3>
                </Card.Text>



                <Card.Img className='course_img p-4 ' variant="top" src={cour.photo_url} />
                <Card.Body>
                    <Card.Text className='text-info text-large'><h1>{cour.name}</h1></Card.Text>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Cart;