import logo from '../images/CatwikiLogo.svg'
import bgImg from '../images/HeroImagelg.png'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { BsSearch } from "react-icons/bs"


const Hero = () => {
    return(
        <div className="hero" style={{backgroundImage: `url(${bgImg})`}}>
            <Container>
                <Row>
                    <Col className='hero-data'>
                        <img src={logo} alt="logo"/>
                        <p>Get to know your cat breed</p>
                        <div className='search'>
                            <input type="text" placeholder="Enter your breed" />
                            <BsSearch className='search-icon' />
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero