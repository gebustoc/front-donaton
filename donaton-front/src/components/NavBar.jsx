import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavBar({loginviewmodel}) {

  return (
   <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
       <Navbar.Brand href="/">Donaton</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between w-100'>
         <Nav className="me-auto" activeKey={location.pathname}>
           <Nav.Link href="/" >Inicio</Nav.Link>
           <Nav.Link href="/needs">Causas</Nav.Link>
           <Nav.Link href="/us">Nosotros</Nav.Link>
           <Nav.Link href="/locations">Sedes</Nav.Link>   
         </Nav>

         <div style={{gap:".5rem", display:"flex"}}>
            <Button style={{display:!loginviewmodel.loggedIn ? "" : "none"}} href="/login">Iniciar sesion</Button>
            <Button style={{display:!loginviewmodel.loggedIn ? "" : "none"}} href="/register">Registrarse</Button>
        
            <Button style={{display:loginviewmodel.loggedIn ? "" : "none"}} href='/logout'>Cerrar sesion</Button>
         
         </div>
       
       </Navbar.Collapse>
     </Container>
     
   </Navbar>
 );
}

export default NavBar;