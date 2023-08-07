import Hero from "../components/Hero"
import MostSearched from "../components/MostSearched"
import Benefits from "../components/Benefits"
import { Stack } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

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