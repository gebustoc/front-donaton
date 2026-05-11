import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useLoginViewModel from "../viewmodel/useLoginViewModel";

export default function LoginView({userviewmodel}){
    const viewmodel = useLoginViewModel(userviewmodel)

    return (
        <Container className="wrapper">
            <Row className="justify-content-center loginbg" style={{alignItems:"center",height:"90vh"}}>
                <Col className="col-md-6">
                    <Card className="shadow">
                        <Card.Body style={{display:"grid"}}>
                            <h1 style={{textAlign:"center"}}>Bienvenido</h1>
                            <h5>Correo</h5>
                            <input value={viewmodel.email} onChange={(event)=>viewmodel.setEmail(event.target.value)}></input>
                            <h5>Contraseña</h5>
                            <input value={viewmodel.pass} onChange={(event)=>viewmodel.setPass(event.target.value)}></input>

                            
                            <div style={{paddingTop: "1rem"}}>
                                <Button 
                                    id="boton-inicio" 
                                    type="submit" 
                                    children="Iniciar Sesion"
                                    disabled = {!viewmodel.isValidForm()}
                                    onClick={()=>{viewmodel.AttemptLogin()}}
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