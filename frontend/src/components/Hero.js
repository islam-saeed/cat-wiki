import logo from '../images/CatwikiLogo.svg'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs"
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Hero = ({ allBreeds }) => {

    // to store the text typed in the search input
    const [searchText, setSearchText] = new useState('')

    // to set the search results div visible
    const [searchResultsVisible, setSearchResultsVisible] = new useState(false)

    // to get the search results from the api
    const [searchResults, setSearchResults] = new useState([])
    
    // to get the search results from the api using regular expression and set the search results state
    const searchAllBreeds = (value) => {
        setSearchResults([])
        return allBreeds.map(breed => {
            if(RegExp(`w*${value}w*`,'i').test(breed.name)){
                setSearchResults(prev => [...prev, breed])
            }
        })
    }

    // to update the searchText state with the new value and search the db with said value
    const handleChange = (e) => {
        setSearchText(e.target.value)
        searchAllBreeds(e.target.value)
    }

    // to set the state to true on focus to show the search results div
    const handleFocus = () => {
        setSearchResultsVisible(true)
    }

    // to set the state to false to remove the search results div
    const handleBlur = () => {
        // wait for a time before removing for the onMouseOver to know if the mouse is on the div
        setTimeout(() => {
            setSearchResultsVisible(false)
        },200)
    }

    // tell the db about the search to increment the search counter for the most searched
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