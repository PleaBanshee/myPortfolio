import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/anglogold.svg";
import Container from "react-bootstrap/Container";

import './experience.style.css'

const Experience = () => {
    return (
        <div>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="anglo logo" />
                            </Card.Header>

                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">AngloGold Ashanti </Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">BCX and Deloitte</strong>
                                    <br />
                                    <strong>Area:</strong> Coporate Division & Cyber Security sector
                    <br />
                                    <strong>Description:</strong> <strong> Job shadowing with tasks completed, gained experience in each sector of the business and anlalysis of cyber threats </strong> 
                    <br />
                                    <strong>Technology:</strong> CISCO, JavaScript, Oracle, SQL, .Net & IIS servers 
                    <br />
                                    
                  </Card.Text>

                                </div>
                            </Card.Body>
                            </Card>
                        </Tilt>
                </Container>

            </Jumbotron>
        </div>
    )
}

export default Experience
