import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
//logos
import L_NastockLogo from "../../assets/img/projects/nastockLogo.png";
import L_SPACE from "../../assets/img/projects/Seikan.png";
import L_JUM from "../../assets/img/projects/JUM.png";
import L_POKE from "../../assets/img/projects/pokes.jpeg"



//skills
import L_C from "../../assets/img/skills/C_.svg";
import L_VS from "../../assets/img/skills/VS.svg";
import L_ACCESS from "../../assets/img/skills/Access.svg";
import L_SQL from "../../assets/img/skills/mysql.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./projects-timeline.style.css";

const ProjectTimeline = () => {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
            <Events> 
                    {/* Project: Get GitHub Info */}
                    <ImageEvent date="10/09/2019" className="text-center" text="FeedLot System" src={L_NastockLogo } alt="FeedLot System">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A program that  is for the development of an information system that monitors animal intake and weight for life stock farming. 
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Query database for specific data that the owner may need</li>
                                                    <li>Designed GUI</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_C} alt="C#" rounded className="image-style m-1"></Image> C# program
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_VS} alt="VS" rounded className="image-style m-1"></Image> Visual Studio 
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_ACCESS} alt="VS" rounded className="image-style m-1"></Image> Microsoft Access
                            </span>
                                                    </li>
                                                    
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                               
                                <UrlButton href="https://github.com/MeerKat98/Feed_Lot" target="_blank">
                                    SOURCE CODE
                </UrlButton>
                                
                            </div>
                        </div>
                    </ImageEvent>
                     {/* Project: Space */}
          <ImageEvent date="21/05/2019" className="text-center" text="Intersteller Nebula Trading" src={L_SPACE} alt="Space">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A database that stores fictional space port docking information.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of all docking of ships </li>
                          <li>Query information as admistrator</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_SQL} alt="VS" rounded className="image-style m-1"></Image> MySQL
                            </span>
                                                    </li>
                          
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                 <UrlButton href="https://github.com/MeerKat98/Seikan" target="_blank">
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>
                    {/* Project: RoboFriends */}

                    <ImageEvent date="01/10/2020" className="text-center" text="MY CV" src={L_JUM} alt="Jum">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> My technical portfolio 
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Search through my projects</li>
                                                    <li>Users can contact me </li>
                                                    <li>Uses API and cloud hosting </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="VS" rounded className="image-style m-1"></Image> React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_HTML5} alt="VS" rounded className="image-style m-1"></Image> HTML 5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_GIT} alt="VS" rounded className="image-style m-1"></Image> Git
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_NODE_JS} alt="VS" rounded className="image-style m-1"></Image> Node JS
                            </span>
                                                    </li>

                                                    
                                                    
                                                    
                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                
                                <UrlButton href="https://github.com/jumphoto/myPortfolio" target="_blank">
                                    SOURCE CODE
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    <ImageEvent date="06/10/2020" className="text-center" text="Pokemon" src={L_POKE} alt="poke">
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Using an API to call data from a server 
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Uses Pokemon API to retrive any information about any pokemon</li>
                                                    <li>See below the names of my favourite Pokemon</li>
                                                </ul>
                                                
                                               
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton href="https://pokeapi.co/" target="_blank">
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>
            </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
