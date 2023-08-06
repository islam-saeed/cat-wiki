import axios from 'axios'
import { useEffect, useState } from 'react'


const BreedDetails = ({id}) => {

    const [ JSON, setJSON ] = new useState({})
    const [ breedImage, setBreedImage ] = new useState({})

    const getData = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/breed/${id}`)
            setJSON(response.data)
            const image = await axios.get(`http://localhost:4000/breed/image/${id}`)
            setBreedImage(image.data[0].url)
            console.log(JSON)
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
    }, [JSON, breedImage]);

    return(
        <div className='details'>
            <div>
                <img src={breedImage} alt="cat" />
            </div>
            <div></div>
        </div>
    )

}

export default BreedDetails