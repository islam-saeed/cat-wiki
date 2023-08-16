import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom";


const MostSearched = ({ allBreeds }) => {

    // to store the most searched breeds fetched from api
    const [topSearches, setTopSearches] = new useState([]);

    // to store the search results after removing the undefined values
    const [topSamples, setTopSamples] = new useState([]);

    // to store the urls of the breed images
    const [imageURLs, setImageURLs] = new useState([]);

    // to get the search counters of the breeds
    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/breed/search/')
        setTopSearches(response.data)
    }

    // to fetch data on load
    useEffect(() => {
        fetchData()
    }, []);

    // to map the results for the undefined values
    useEffect(() => {
        if(topSearches.length > 0 && allBreeds.length > 0){
            setTopSamples(topSearches.map(search =>
                allBreeds.map(breed => {
                    if(search.breedID === breed.id){
                        return breed
                    }
                }).filter(e => e !== undefined)
            ))
        }
    }, [allBreeds,topSearches]);

    // to get the images of the breeds
    const fetchImages = async () => {
        const collectedImages = await Promise.all(topSamples.map( async (sample) => {
            try{
                const response = await axios.get('http://localhost:4000/breed/images/'+ sample[0].id)
                const data = await response.data[0].url
                return data
            } catch (e){ console.log(e.message)}
        }))
        setImageURLs(collectedImages)
    }

    // to fetch the images when the topSamples state is ready
    useEffect(() => {
        if(topSamples.length > 0){
            fetchImages()
        }
    },[topSamples])

    return(
        <div className="most-searched" >
            <Container>
                <h4>Most Searched Breeds</h4>
                <div className="border"></div>
                <Row>
                    <Col xs={6}>
                        <h1>66+ Breeds For you to discover</h1>
                    </Col>
                    <Col lg className="see-more">
                        <Link to="/topSearch/"><h3>SEE MORE <BsArrowRight /></h3></Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={3}>
                        {typeof(imageURLs[0]) === 'string' && 
                            <Link to={`/cat/${topSamples[0][0].id}`}>
                                <div className="top-search">
                                    <img src={imageURLs[0]} alt="cat" />
                                    <h3>{topSamples[0][0].name}</h3>
                                </div>
                            </Link>
                        }
                    </Col>
                    <Col xs={6} lg={3}>
                        {typeof(imageURLs[1]) === 'string' && 
                            <Link to={`/cat/${topSamples[1][0].id}`}>
                                <div className="top-search">
                                    <img src={imageURLs[1]} alt="cat" />
                                    <h3>{topSamples[1][0].name}</h3>
                                </div>
                            </Link>
                        }
                    </Col>
                    <Col>
                        {typeof(imageURLs[2]) === 'string' && 
                            <Link to={`/cat/${topSamples[2][0].id}`}>
                                <div className="top-search">
                                    <img src={imageURLs[2]} alt="cat" />
                                    <h3>{topSamples[2][0].name}</h3>
                                </div>
                            </Link>
                        }
                    </Col>
                    <Col>
                        {typeof(imageURLs[3]) === 'string' && 
                            <Link to={`/cat/${topSamples[3][0].id}`}>
                                <div className="top-search">
                                    <img src={imageURLs[3]} alt="cat" />
                                    <h3>{topSamples[3][0].name}</h3>
                                </div>
                            </Link>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MostSearched