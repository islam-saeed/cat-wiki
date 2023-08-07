import logo from '../images/CatwikiLogo.svg'
import bgImg from '../images/HeroImagelg.png'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


const Hero = () => {
    return(
        <div className="hero" style={{backgroundImage: `url(${bgImg})`}}>
            <Container>
                <Row>
                    <Col className='hero-data'>
                        <img src={logo} alt="logo"/>
                        <p>Get to know your cat breed</p>
                        <input type="text" placeholder="Enter your breed" />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero