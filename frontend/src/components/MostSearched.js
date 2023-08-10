import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"


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
                    {/* {imageURLs.length > 0 && 
                        imageURLs.map((imageURL,index) => {
                            return(
                                <Col>
                                    <div className="top-search">
                                        <img src={imageURL} alt="cat" />
                                        <h2>{topSamples[index]}</h2>
                                    </div>
                                </Col>
                            )
                    })} */}
                </Row>
            </Container>
        </div>
    )
}

export default MostSearched