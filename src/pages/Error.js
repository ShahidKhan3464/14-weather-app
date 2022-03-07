import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Css/Error.css'

const Error = () => {

    return (
        <section>
            <Container className='error-page'>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <img src="error.jpg" alt="404" style={{ width: '25rem' }} />
                        <h1>Opps! Page Not Found</h1>
                        <Link to="/"><Button variant='secondary'>Go Back</Button></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Error