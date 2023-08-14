import logo from "./images/CatwikiLogo.svg"
import Footer from './components/Footer';
import Home from './pages/Home';
import Cat from "./pages/Cat";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import TopSearches from "./pages/TopSearches";

function App() {
  return (
    <div className="App">
      <Container>
        <img src={logo} alt="logo" style={{marginTop: "2vh"}} />
        <Routes>
          <Route path="/" element={<TopSearches />} />
          <Route path="/cat/:id" element={<Cat />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
