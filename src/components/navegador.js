import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"> Navegador </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Menú</Nav.Link>
          <Nav.Link href="/empresas">Mis empresas</Nav.Link>
          <Nav.Link href="/empleados">Empleados</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegador;
