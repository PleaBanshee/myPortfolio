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
                    {/*Frontend*/}
                <Col md={0}>
                <Card className="focus mt-2 mb-2">
                <Card.Body>
                    <Card.Title className="text-center  card-title">Frontend</Card.Title>
                    <hr />
                    {/*add card title and change md = 4*/}
                </Card.Body>
                </Card>
                </Col>
                </Row>
               
                </CardDeck>
        </div>
    )
}


export default Skills
