import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div className='bg-light ' style={{ textAlign: 'center' }}>
            <div className='m-6'>
                <h1 className='text-warning'> Welcome to Our <span className='text-info'>Basic Web Development.</span> </h1>
            </div>

            <div className='mt-4'>
                <Link style={{ textDecoration: 'none' }} to={`/coursedetail/:id`} >
                    <Button variant="info" size="lg">
                        Explore Our Courses <FaAngleDoubleRight></FaAngleDoubleRight>
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default Home;

