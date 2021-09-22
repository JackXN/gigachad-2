import './App.css';
import styled from 'styled-components';
import BgImage from './Assets/images/new-bg_1@2x.png';
import Theme from './utils/Theme';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Hero';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MySvg from './Assets/Svgs/wave.svg'



const Container = styled.div`
height: 100%;
width: 100%;
background-image: url(${BgImage});
background-position:center;
background-size:cover;
background-repeat: no-repeat;
overflow-x: hidden;
border:none;
` 


const DarkLayer = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.5);
`


function App() {
  return (
    <Router>
      <Theme>
      <Container>
      <DarkLayer>
        <Navbar/>
  <Switch>
    <Route exact path='/'>
      <HeroSection/>
    </Route>
  </Switch>
  </DarkLayer>
  </Container>
  </Theme>
  </Router>
  );
}

export default App;
