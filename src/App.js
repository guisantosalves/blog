import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import {Container, Row, Col} from 'react-bootstrap';

//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function App() {
  return (
    <Container>
      <Row>
        <Left/>
        <Right/>
      </Row>
    </Container>
  )
}


export default App;
