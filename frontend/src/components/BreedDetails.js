import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import Percentages from './Percentages'


const BreedDetails = () => {
    const params = useParams()
    const [ JSON, setJSON ] = new useState({})
    const [ catImages, setCatImages ] = new useState({})


    const getData = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/breed/${params.id}`)
            setJSON(response.data)
            const images = await axios.get(`http://localhost:4000/breed/images/${params.id}`)
            setCatImages(images.data)
        } catch (e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        console.log(JSON)
        console.log(catImages)
    }, [JSON, catImages]);


    

    return(
        <div className='details'>
            <Container>
                <Row>
                    <Col>
                        {catImages[0] && <img src={catImages[0].url} alt="cat" />}
                    </Col>
                    <Col>
                        <h1>{JSON.name}</h1>
                        <p>{JSON.description}</p>
                        <p><span className='bold'>Temperament: </span>{JSON.temperament}</p>
                        <p><span className='bold'>Origin: </span>{JSON.origin}</p>
                        <p><span className='bold'>Life Span: </span>{JSON.life_span}</p>
                        {<Percentages name="Adaptability" perc={JSON.adaptability} />}
                        {<Percentages name="Affection level" perc={JSON.affection_level} />}
                        {<Percentages name="Child Friendly" perc={JSON.child_friendly} />}
                        {<Percentages name="Grooming" perc={JSON.grooming} />}
                        {<Percentages name="Intelligence" perc={JSON.intelligence} />}
                        {<Percentages name="Health issues" perc={JSON.health_issues} />}
                        {<Percentages name="Social needs" perc={JSON.social_needs} />}
                        {<Percentages name="Stranger friendly" perc={JSON.stranger_friendly} />}
                    </Col>
                </Row>
                <h1>Other photos</h1>
                <Row className='cat-pics'>
                    <Col>
                        {catImages[1] && <img src={catImages[1].url} alt="cat" />}
                        {catImages[2] && <img src={catImages[2].url} alt="cat" />}
                    </Col>
                    <Col>
                        {catImages[3] && <img src={catImages[3].url} alt="cat" />}
                        {catImages[4] && <img src={catImages[4].url} alt="cat" />}
                    </Col>
                    <Col>
                        {catImages[5] && <img src={catImages[5].url} alt="cat" />}
                        {catImages[6] && <img src={catImages[6].url} alt="cat" />}
                    </Col>
                    <Col>
                        {catImages[7] && <img src={catImages[7].url} alt="cat" />}
                        {catImages[8] && <img src={catImages[8].url} alt="cat" />}
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default BreedDetails