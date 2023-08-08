import image1 from "../images/image 1.png"
import image2 from "../images/image 2.png"
import image3 from "../images/image 3.png"
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"


const Benefits = () => {
    return(
        <div className="benefits">
            <Container>
                <Row>
                    <Col md={5} className="text-container">
                        <div className="border"></div>
                        <h1>Why should you have a cat?</h1>
                        <p>Having a cat around you can trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
                        <h3>READ MORE <BsArrowRight /></h3>
                    </Col>
                    <Col>
                        <Row className="images-container">
                            <Col>
                                <img src={image2} alt="cat" />
                                <img src={image1} alt="cat" />
                            </Col>
                            <Col>
                                <img src={image3} alt="cat" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benefits