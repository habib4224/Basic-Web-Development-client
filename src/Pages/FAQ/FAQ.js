import React from 'react';
import { Container } from 'react-bootstrap';


const FAQ = () => {
    return (
        <Container >
            <div className='m-6, text-info'>
                <h2> Question: <small>
                    Can i Payment Installment?
                </small>
                </h2>
                <h4>Answer: <small>
                    Yes you can pay course fee in 3 instalment.
                </small>
                </h4>
            </div>
            <div className='p-4, text-info'>
                <h2> Question: <small>
                    Do i need a Leptop?
                </small>
                </h2>
                <h4>Answer: <small>
                    Yes you need a leptop or desktop.
                </small>
                </h4>
            </div>
            <div className='p-4, text-info'>
                <h2> Question: <small>
                    What are entry requirements?
                </small>
                </h2>
                <h4>Answer: <small>
                    Basic knowladge of Coumputer oparations
                </small>
                </h4>
            </div>
            <div className='p-4, text-info'>
                <h2> Question: <small>
                    What are the payment methode?
                </small>
                </h2>
                <h4>Answer: <small>
                    Bkash, Nogod, Upay, Bitcoin.
                </small>
                </h4>
            </div>
        </Container>
    );
};

export default FAQ;