import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, } from 'firebase/auth';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';


const Registration = () => {
    const [error, setError] = useState('')

    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);

    const googleLoginProvider = new GoogleAuthProvider();
    const githHubLoginProvider = new GithubAuthProvider();

    const handleGithubLogin = () => {
        providerLogin(githHubLoginProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        providerLogin(googleLoginProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const submitButton = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Container>
            <Form onSubmit={submitButton}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Your Full Name </Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url </Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Enter Your Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Your Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Your Password" required />
                </Form.Group>
                <Button variant="info" type="submit">
                    Registration <FaArrowCircleRight></FaArrowCircleRight>
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <br />
            <><Link style={{ textDecoration: 'none', scolor: 'Aqua', fontWeight: 'bold' }} to='/login'>Already have an account? <FaArrowCircleRight></FaArrowCircleRight> </Link></>
            <br /> <br />
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGithubLogin} variant="outline-primary"><FaGithub></FaGithub> Login with Github</Button>
                    <br />
                    <Button onClick={handleGoogleLogin} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                </ButtonGroup>
            </div>
        </Container>
    );
};

export default Registration;