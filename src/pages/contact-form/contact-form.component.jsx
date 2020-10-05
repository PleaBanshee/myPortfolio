import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./contact-form.style.css"

const Contact = () => {
    return (
        
            <div id="contact">
                <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-cent</Col>er flex-wrap">
                </Col>
                    <div className="m-2">
                        <a href="mailto:jumanah1998@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-danger" title="jumanah1998@gmail.com">
                                <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.linkedin.com/in/jumanah-al-hazba-3260a91b5/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-primary" title="Visit my LinkenIn">
                                <i className="link"></i> LinkedIn
                </Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.facebook.com/jumanah.alhazba" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-primary" title="Say hello on FB">
                                <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://github.com/jumphoto" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark" title="My other projects">
                                <i className="fab fa-github-square"></i> GitHub
                </Button>
                        </a>
                    </div>
                    


                </Row>
                </Jumbotron>
            </div>
    )
}

export default Contact
