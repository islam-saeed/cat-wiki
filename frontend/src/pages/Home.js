import logo from "../images/CatwikiLogo.svg"
import Hero from "../components/Hero"
import MostSearched from "../components/MostSearched"
import Benefits from "../components/Benefits"
import Footer from "../components/footer"

const Home = () => {
    return(
        <div className="Home" >
            <img src={logo} alt="logo" />
            <Hero />
            <MostSearched />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Home