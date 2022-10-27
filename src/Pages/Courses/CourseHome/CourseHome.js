import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CoursesDe from '../CoursesDe/CoursesDe';
import CoursesList from '../CoursesList/CoursesList';


const CourseHome = () => {
    return (
        <Container>
            <Row>

                <Col lg="9">
                    <Row> <CoursesDe></CoursesDe> </Row>
                </Col>
                <Col lg="3">
                    <CoursesList></CoursesList>

                </Col>

            </Row>
        </Container>

    );
};

export default CourseHome;