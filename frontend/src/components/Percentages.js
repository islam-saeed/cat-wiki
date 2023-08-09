import { Col, Row } from "react-bootstrap"

const Percentages = ({name,perc}) => {
    return(
        <Row className="mb-3">
            <Col>
                <span className='bold'>{name}</span>
            </Col>
            <Col className="d-flex">
                <div className={perc >= 1 ? "full" : "empty"}></div>
                <div className={perc >= 2 ? "full" : "empty"}></div>
                <div className={perc >= 3 ? "full" : "empty"}></div>
                <div className={perc >= 4 ? "full" : "empty"}></div>
                <div className={perc === 5 ? "full" : "empty"}></div>
            </Col>
        </Row>
    )
}

export default Percentages