import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/profile/profile.jpeg'

import './about.style.css'

const About = () => {
    return (
        <div id='about'>
        <div className="about"></div>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
                <Row className="pt-3 pb-5 align-items-center">
                 <Col xs = {12} md = {6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            {/*<Image src="holder.js/171x180" rounded />*/}
                            <Image className="profile justify-content-end" alt="profile"src= {Profile} thumbnail fluid />
                    </Row>
                </Col>

                <Col xs={12} md = {6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            Hello ! my name is <strong>&nbsp;Jumanah Al-Hazba</strong>
                            <br /> 
                            I am a third year Bachelor of Science Information Technology student at the North West
                            University. Seeking opportunities to gain experience to expand my knowledge in the
                            working environment . I am a hard worker, a quick study and can work under pressure.
                            <br />
                            Some of my relevant skills with formal education include Artificial intelligence, Networking, Systems Analysis and Design,Data analytics and Statistics 
                            and Business Management and Accounting 
                            <br />
                            My goal is always driven towards providing an amazing experience with the best level of quality and service to clients.
                            <br />
                            Furthermore, as a Demi (Teachers assistant) for Python and Data Analytics I gained more experience in helping to support others.
                            <br /> <br />
                    </Row>

                    <Row>
                        {/*Buttons for API*/}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2"variant="outline-primary">Chat</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://docs.google.com/document/d/1iUfbuBHbaNMmFiS1_MRvUQNczNUWwcw7m425l9HrTkg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                      </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/jumphoto" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                      </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/jumanah-al-hazba-3260a91b5/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                      </Button>
                                    </a>
                                </div>

                    </Col>

                    </Row>

                </Col>
             </Row>               
             </Container>
        </div>
    )
}


export default About
