import logo from '../images/CatwikiLogo.svg'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Hero = ({ allBreeds }) => {
    const [searchText, setSearchText] = new useState('')
    const [searchResultsVisible, setSearchResultsVisible] = new useState(false)
    const [searchResults, setSearchResults] = new useState([])
    

    useEffect(() => {
        console.log('allBreeds',allBreeds)
    }, [allBreeds])

    // useEffect(() => {
    //     console.log(searchResults)
    // }, [searchResults])

    const searchAllBreeds = (value) => {
        setSearchResults([])
        return allBreeds.map(breed => {
            if(RegExp(`w*${value}w*`,'i').test(breed.name)){
                setSearchResults(prev => [...prev, breed])
            }
        })
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
        searchAllBreeds(e.target.value)
    }
    const handleFocus = () => {
        setSearchResultsVisible(true)
    }
    const handleBlur = () => {
        setTimeout(() => {
            setSearchResultsVisible(false)
        },200)
    }
    const handleClick = (breedID) => {
        axios.post('http://localhost:4000/breed/search/'+breedID);
    }
    return(
        <div className="hero">
            <Container>
                <Row>
                    <Col className='hero-data'>
                        <img src={logo} alt="logo"/>
                        <p>Get to know your cat breed</p>
                        <div className='search'>
                            <input type="text" 
                                placeholder="Search" 
                                onChange={handleChange} 
                                onFocus={handleFocus}
                                onBlur={handleBlur} 
                                value={searchText}
                                />
                            <BsSearch className='search-icon' />
                        </div>
                        {
                            searchResultsVisible &&
                            searchText !== '' &&
                            <div className='search-results'>
                                <Stack gap={3}>
                                    {searchResults.map(searchResult => {
                                        return <Link className='result' to={`/cat/${searchResult.id}`} onClick={() => handleClick(searchResult.id)}>{searchResult.name}</Link>
                                    })}
                                </Stack>
                            </div>
                        }
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero