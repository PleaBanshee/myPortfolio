import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Image from 'react-bootstrap/Image'


import './skills.style.css';
//import {skills} from './skills-data'

const Skills = () => {
    return (
        
         <div className="pt-3 pb-3" id="skills">
                <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>  
                <CardDeck>
                <Row className="d-flex justify-content-around">
                    {/*Frontend add console.log*/}
                <Col md={0}>
                <Card className="focus mt-2 mb-2">
                <Card.Body>
                    <Card.Title className="text-center  card-title">Frontend</Card.Title>
                    <hr />
                    
                    {/*add card text and change md = 4*/}
                    HTML 5, CSS3, Javascript, Bootstrap, React

                    
                </Card.Body>
                </Card>
                </Col>

                <Col md={0}>
                <Card className="focus mt-2 mb-2">
                    <Card.Body>
                    <Card.Title className="text-center  card-title">Backend & Databases </Card.Title>
                    <hr />
                    {/*add card text and change md = 4*/}
                    Node.js, .Net, MS Access,Oracle, MySQL 

                </Card.Body>
                </Card>
                </Col>

                <Col md={0}>
                <Card className="focus mt-2 mb-2">
                <Card.Body>
                    <Card.Title className="text-center  card-title">Programing Languages </Card.Title>
                    <hr />
                    {/*add card text and change md = 4*/}
                        C#, C++, Java, Javascript & Python

                </Card.Body>
                    </Card>
                    </Col>

                <Col md={0}>
                <Card className="focus mt-2 mb-2">
                    <Card.Body>
                        <Card.Title className="text-center  card-title"> Other </Card.Title>
                        <hr />
                        {/*add card text and change md = 4*/}
                        Cisco Packet Tracer, Git Kraken, Git, IBM Dash Board
                    

                </Card.Body>
                    </Card>
                    </Col>


                </Row>
               
                </CardDeck>
        </div>
    )
}


export default Skills
