import logo from "./images/CatwikiLogo.svg"
import Footer from './components/Footer';
import Home from './pages/Home';
import Cat from "./pages/Cat";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Container>
        <img src={logo} alt="logo" />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
