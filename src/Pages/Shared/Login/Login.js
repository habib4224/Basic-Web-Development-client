import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaArrowCircleRight, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonGroup, Container } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);

    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const githHubLoginProvider = new GithubAuthProvider();
    const googleLoginProvider = new GoogleAuthProvider();

    const handleGithubLogin = () => {
        providerLogin(githHubLoginProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <Container >
            <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="info" type="submit">
                    Login <FaArrowCircleRight></FaArrowCircleRight>
                </Button>
                <br />
                <br />
                <>
                    <Link style={{ textDecoration: 'none', color: 'Aqua', fontWeight: 'bold' }} to='/registration'>
                        Creat an Account <FaArrowCircleRight></FaArrowCircleRight>
                    </Link>
                </>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>
            <br />
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGithubLogin} variant="outline-info"><FaGithub></FaGithub> Login with Github</Button>
                    <br />
                    <Button onClick={handleGoogleLogin} variant="outline-info"> <FaGoogle></FaGoogle> Login with Google</Button>
                </ButtonGroup>
            </div>
        </Container>
    );
};

export default Login;