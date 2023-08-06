import logo from "./images/CatwikiLogo.svg"
import Footer from './components/Footer';
import Home from './pages/Home';
import Cat from "./pages/Cat";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;
