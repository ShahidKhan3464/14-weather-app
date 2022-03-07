import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Css/Home.css'

const Home = () => {

    return (
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className='left'>
                        <p>Welcome to WeatherApp</p>
                        <h1>Get The Latest <span className="text_clr">Weather</span> Of Your City</h1>
                        <Link to='/Weather'><button> Check Now </button></Link>
                    </Col>
                    <Col sm={12} md={6} lg={6} className='right'>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img src="bg-1.jpg" alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img src="bg-2.jpg" alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home