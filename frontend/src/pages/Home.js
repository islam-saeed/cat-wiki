import Hero from "../components/Hero"
import MostSearched from "../components/MostSearched"
import Benefits from "../components/Benefits"

const Home = () => {
    return(
        <div className="Home" >
            <Hero />
            <MostSearched />
            <Benefits />
        </div>
    )
}

export default Home