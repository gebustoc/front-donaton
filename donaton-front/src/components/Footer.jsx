import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="bg-dark text-white py-4">
            <Row>
                <Col md="4">
                    <h5 children="Sobre Nosotros"/>
                    <p children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id libero ipsum."/>
                </Col>
                <Col md="4">
                    <h5 children="Enlaces Rápidos"/>
                    <ul className="list-unstyled">
                        <li><a href="/" className="text-white">Inicio</a></li>
                    </ul>
                </Col>
            </Row>
            
            <div className="text-center mt-4">
                <p children="2026 Donaton. Todos los derechos reservados."/>
            </div>
        </Container>
    );
}

export default Footer;