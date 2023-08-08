import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import Percentages from './Percentages'


const BreedDetails = ({id}) => {

    const [ JSON, setJSON ] = new useState({})
    const [ breedImage, setBreedImage ] = new useState({})
    const [ catImages, setCatImages ] = new useState({})


    const getData = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/breed/${id}`)
            setJSON(response.data)
            const image = await axios.get(`http://localhost:4000/breed/image/${id}`)
            setBreedImage(image.data[0].url)
            const images = await axios.get(`http://localhost:4000/breed/images/${id}`)
            setCatImages(images)
        } catch (e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        console.log(JSON)
        console.log(breedImage)
        console.log(catImages)
    }, [JSON, breedImage, catImages]);


    

    return(
        <div className='details'>
            <Container>
                <Row>
                    <Col>
                        <img src={breedImage} alt="cat" />
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
                {catImages.data &&
                <Row className='cat-pics'>
                    <Col>
                        <img src={catImages.data[1].url} alt="cat" />
                        <img src={catImages.data[2].url} alt="cat" />
                    </Col>
                    <Col>
                        <img src={catImages.data[3].url} alt="cat" />
                        <img src={catImages.data[4].url} alt="cat" />
                    </Col>
                    <Col>
                        <img src={catImages.data[5].url} alt="cat" />
                        <img src={catImages.data[6].url} alt="cat" />
                    </Col>
                    <Col>
                        <img src={catImages.data[7].url} alt="cat" />
                        <img src={catImages.data[8].url} alt="cat" />
                    </Col>
                </Row>}
            </Container>
        </div>
    )

}

export default BreedDetails