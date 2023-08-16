import Hero from "../components/Hero"
import MostSearched from "../components/MostSearched"
import Benefits from "../components/Benefits"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {

    // to store the data for all the breeds
    const [allBreeds, setAllBreeds] = new useState({})

    // to get the data for all the breeds
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/breed/')
            setAllBreeds(response.data)
        } catch (e){
            console.log(e.message)
        }
    }

    // to fetch the data for all the breeds on load to reduce the number of fetches
    useEffect(() => {
        fetchData()
    }, []);
    
    return(
        <div className="Home" >
            <Hero allBreeds={allBreeds} />
            <MostSearched allBreeds={allBreeds} />
            <Benefits />
        </div>
    )
}

export default Home