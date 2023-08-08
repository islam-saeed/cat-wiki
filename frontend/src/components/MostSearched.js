import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"


const MostSearched = () => {



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
                    <Col></Col>
                    <Col></Col>
                    <Col md></Col>
                    <Col md></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MostSearched