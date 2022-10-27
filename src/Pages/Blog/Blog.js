import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div>
                <h1>Qustion: <small>what is cors?</small></h1>
                <h4>Answer: <small>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</small></h4>
            </div>
            <div>
                <h1>Qustion: <small>Why are you using firebase? What other options do you have to implement authentication?</small></h1>
                <h4>Answer: <small>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</small></h4>
            </div>
            <div>
                <h1>Qustion: <small>How does the private route work?</small></h1>
                <h4>Answer: <small>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</small></h4>
            </div>
            <div>
                <h1>Qustion: <small>What is Node? How does Node work?</small></h1>
                <h4>Answer: <small>Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code,</small></h4>
            </div>
        </Container>
    );
};

export default Blog;