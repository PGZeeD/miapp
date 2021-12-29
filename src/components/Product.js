import React from "react"
import { Col ,Row} from "react-bootstrap"
import '../assets/css/styles.css;

export const Product = ({title, image}) => {

    return (
        <Col xs={4}>
            <Row>
                <Col>
                    <div>{title}</div>
                </Col>                
            </Row>
            <Row>
                <Col xs={12}>
                    <img className="img-product" alt="" src={image}></img>
                </Col>
            </Row>
        </Col>

    )
}