import './App.css';
import styled from 'styled-components';
import BgImage from './Assets/images/background_1@2x.png';
import Theme from './utils/Theme';
import Navbar from './components/Navbar/Navbar';

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
height: 100vh;
width: 100%;
background-color: rgba(0,0,0,0.5);
`




function App() {
  return (
<Theme>
  <Container>
  <DarkLayer>
  <Navbar/>
    </DarkLayer>
  </Container>
  </Theme>
  );
}

export default App;
