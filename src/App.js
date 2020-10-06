import React, { useState, useEffect }  from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container'

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component"
import About from "./pages/about/about.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.components"
import Skills from "./pages/skills/skills.component"
import Experience from './pages/experience/experience.component';
import Contact from './pages/contact-form/contact-form.component'
import FooterPanel from "./components/footer/footer.component";


import './App.css';



const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  
  return (
    
      
    <div>
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
      {/*About section - uses parallax and fade*/}
      <div>

         <Parallax blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.jpg")}
          bgImageAlt=""
          strength={-200} >
          <Container className="container-box rounded">
          <Fade duration={500}>
          <About/>
          </Fade>
          </Container>
          </Parallax>

          <Skills />

          </div>
            <Container className="container-box rounded">
              <Fade duration={500}> 
               <Experience/>
            </Fade>
            </Container>

            <div>
              <Container className="container-box rounded">
              <Fade duration={500}>
              <ProjectTimeline/>
              </Fade>
              </Container>
            </div>

            <div>
              
              <Container className="container-box rounded">
                <Fade duration={500}>
                <PokemonList pokemon={pokemon} />
                </Fade>
              </Container>
            </div>

            <div>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <Contact />
                </Fade>
              </Container>
            </div>
      

      <hr />
      <FooterPanel />
      
      </div>

  

  );
}

export default App;
