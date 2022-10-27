import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCentercode, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        providerLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">

            <Container >



                <Navbar.Brand> <Link style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to='/' ><FaCentercode></FaCentercode> Basic-Web-Development</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/`}>Home</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/coursedetail/:id`}>Courses</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/faq`}>FAQ</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/blog`}>Blogs</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/registration`}>Registration</Link>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                    </Nav>
                    <Nav>
                        <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to={`/`}>{
                            user?.uid ? <span>


                                <Button variant="outline-info" onClick={handleLogOut}>Logout</Button>


                            </span>
                                :

                                <Link to='/login'> <Button variant="outline-info" onClick={handleLogOut}>Login</Button></Link>



                        }</Link>


                        <div>
                            {['bottom'].map((placement) => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        user?.accessToken
                                            ?
                                            <Tooltip id={`tooltip-${placement}`}>
                                                <span>{user?.displayName}</span>
                                            </Tooltip>
                                            :
                                            <></>
                                    }
                                >
                                    <Link className='mx-2' style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} eventKey={2} to={`/`}>
                                        {
                                            user?.photoURL ?
                                                <Image style={{ height: '25px' }} roundedCircle src={user?.photoURL}></Image>
                                                : <FaUser></FaUser>
                                        }

                                    </Link>
                                </OverlayTrigger>
                            ))}
                        </div>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;