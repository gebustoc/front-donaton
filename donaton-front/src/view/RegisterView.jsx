import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function RegisterView(){
    return (
        <Container className="wrapper">
            <Row className="justify-content-center loginbg" style={{alignItems:"center",height:"90vh"}}>
                <Col className="col-md-6">
                    <Card className="shadow">
                        <Card.Body style={{display:"grid"}}>
                            <h1 style={{textAlign:"center"}}>Crear Cuenta</h1>
                            <h5>Correo</h5>
                            <input></input>
                            <h5>Contraseña</h5>
                            <input></input>

                            
                            <div style={{paddingTop: "1rem"}}>
                                <Button 
                                    id="boton-inicio" 
                                    type="submit" 
                                    children="Crear cuenta" 
                                />
                                <div><a href="register">Iniciar Sesion?</a></div>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )


}