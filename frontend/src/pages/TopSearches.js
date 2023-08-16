import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row, Stack } from "react-bootstrap"

const TopSearches = () => {

    // to store the data of the most searched breeds
    const [mostSearched, setMostSearched] = new useState({})

    // to store the images of the most searched breeds
    const [imageURLs, setImageURLs] = new useState({})

    // to store the descriptions of the most searched breeds
    const [descriptions, setDescriptions] = new useState({})

    // to fetch the data of the most searched breeds
    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:4000/breed/search/')
            setMostSearched(response.data)
        } catch (e) {
            console.log(e.message)
        }
        
    }

    // to fetch the images of the most searched breeds after the data has been loaded
    const fetchImages = async () => {
        const collectedImages = await Promise.all(mostSearched.map( async (search) => {
            try{
                const response = await axios.get('http://localhost:4000/breed/image/'+ search.breedID)
                const data = await response.data[0].url
                return data
            } catch (e){ console.log(e.message)}
        }))
        setImageURLs(collectedImages)
    }

    // to fetch the descriptions of the most searched breeds after the data has been loaded 
    const fetchDescriptions = async () => {
        const collectedDescriptions = await Promise.all(mostSearched.map( async (search) => {
            try{
                const response = await axios.get('http://localhost:4000/breed/'+ search.breedID)
                const data = await response.data.description
                return data
            } catch (e){ console.log(e.message)}
        }))
        setDescriptions(collectedDescriptions)
    }

    // to fetch the data on load
    useEffect(() => {
        fetchData()
    }, [])

    // to fetch the images after the data has been loaded
    useEffect(() => {
        if(Array.isArray(mostSearched)){fetchImages()}
    }, [mostSearched])
    
    // to fetch the descriptions after the data has been loaded 
    useEffect(() => {
        if(Array.isArray(mostSearched)){fetchDescriptions()}
    }, [mostSearched])
    
    return (
        <div className="top-searches">
            <h1>Top 10 most searched breeds</h1>
            <Stack gap={5}>
                {Array.isArray(mostSearched) && Array.isArray(imageURLs) &&
                    mostSearched.map((result,index) => {
                        if(typeof(imageURLs[index])==='string'){
                            return(
                                <div className="top-search-list-item">
                                    <Row>
                                        <Col xs={4}>
                                            <img src={imageURLs[index]} alt="cat" />
                                        </Col>
                                        <Col xs={8}>
                                            <h1>{index+1}. {result.breed}</h1>
                                            <p>{descriptions[index]}</p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }
                    })
                }
            </Stack>
        </div>
    )
}

export default TopSearches