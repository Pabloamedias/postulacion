import React from "react";
import { Form, Button, Table } from "react-bootstrap";

import "../assets/css/formularioStyle.css";

const Empresas = () => {
  return (
    <div className="formulario">
      <h2>Formulario para empresas</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa nombre de la empresa"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa dirección de la empresa"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>RUT</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el RUT de la empresa"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el número de teléfono de la empresa"
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="outline-success" type="submit" className="ingresar ">
            Ingresar empresa
          </Button>
        </div>
      </Form>
      <h2 className="titulo2">Mis empresas registradas</h2>
      <div className="tablas">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>RUT</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Empresas;
