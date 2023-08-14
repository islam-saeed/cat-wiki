import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom";


const MostSearched = ({ allBreeds }) => {

    const [topSearches, setTopSearches] = new useState([]);
    const [topSamples, setTopSamples] = new useState([]);
    const [imageURLs, setImageURLs] = new useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/breed/search/')
        setTopSearches(response.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

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

    useEffect(() => {
        if(topSamples.length > 0){
            fetchImages()
        }
    },[topSamples])
    
    useEffect(() => {
        console.log('topSearches: ',topSearches)
        console.log('topSamples: ',topSamples)
        console.log('imageURLs: ',imageURLs)
    }, [topSearches,topSamples,imageURLs])


    const setData = async () => {
        const data = await Promise.all( imageURLs.map((imageURL,index) => {
            return(
                <Col>
                    <div className="top-search">
                        <img src={imageURL} alt="cat" />
                        <h2>{topSamples[index].name}</h2>
                    </div>
                </Col>
            )
        }))
        return data
    }


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
                        <h3>SEE MORE <BsArrowRight /></h3>
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