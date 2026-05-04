import { Button, Card, Col, Row } from "react-bootstrap";

export default function LoginView(){
    return (
        <Container className="wrapper">
            <h1>Bienvenido</h1>
            <Row className="justify-content-center">
                <Col className="col-md-6">
                    <Card>
                        <Card.Body>
                            <Form inputs={formInputs} />

                            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
                            
                            <div style={{paddingTop: "1rem"}}>
                                <Button 
                                    id="boton-inicio" 
                                    type="submit" 
                                    children="Iniciar Sesion" 
                                    onClick={handleLogin} 
                                    disabled={!isFormValid}
                                />
                                <div><a href="register">Crear cuenta?</a></div>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )


}