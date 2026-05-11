import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useLoginViewModel from "../viewmodel/useLoginViewModel";

export default function RegisterView({userviewmodel}){
    
    const viewmodel = useLoginViewModel(userviewmodel)
    
    return (
        <Container className="wrapper">
            <Row className="justify-content-center loginbg" style={{alignItems:"center",height:"90vh"}}>
                <Col className="col-md-6">
                    <Card className="shadow">
                        <Card.Body style={{display:"grid"}}>
                            <h1 style={{textAlign:"center"}}>Crear Cuenta</h1>
                            <h5>Correo</h5>
                            <input value={viewmodel.email} onChange={(event)=>viewmodel.setEmail(event.target.value)}></input>
                            <h5>Contraseña</h5>
                            <input value={viewmodel.pass1} onChange={(event)=>viewmodel.setPass(event.target.value)}></input>

                            
                            <div style={{paddingTop: "1rem"}}>
                                <Button 
                                    id="boton-inicio" 
                                    type="submit" 
                                    children="Crear Cuenta"
                                    disabled = {!viewmodel.isValidForm()}
                                    onClick={()=>{viewmodel.AttemptRegister()}}
                                />
                                <div><a href="login">Iniciar Sesion?</a></div>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )


}