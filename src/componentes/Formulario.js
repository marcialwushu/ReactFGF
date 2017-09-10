
import { Row,Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, { Component } from 'react';
import '.././index.css';
export default class Formulario extends Component {
  render() {
    return (
      <div id="todo">
         <Form>
           <Row>
             <Col sm={12} id="cadastro"><b>Cadastro de evento</b></Col>
           </Row>
           <FormGroup row>
            <Label for="local" sm={2}>Palestra</Label>
            <Col sm={10}>
              <Input type="text" name="palestra" id="palestra" placeholder="Palestra" required/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="local" sm={2}>Nome do palestrante</Label>
            <Col sm={10}>
              <Input type="text" name="nome" id="nome" placeholder="Nome do palestrante" required/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="local" sm={2}>Local do evento</Label>
            <Col sm={10}>
              <Input type="text" name="local" id="local" placeholder="Escreva o local do evento" required/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleDate" sm={2}>Data do evento</Label>
            <Col sm={3}>
              <Input type="date" name="date" id="data" placeholder="data" required/>
            </Col>
             <Label for="exampleDate" sm={2}>Horário do evento</Label>
            <Col sm={3}>
              <Input type="time" name="time" id="horário" placeholder="horário" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="valor" sm={2}>Valor</Label>
            <Col sm={10}>
              <Input min="0" type="number" step="0.01" name="valor" id="valor" placeholder="0,00"/>
            </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="descricao" sm={2}>Descrição do evento</Label>
          <Col sm={10}>
            <Input type="textarea" name="descricao" id="descricao" />
          </Col>
        </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary">Cadastrar</Button>
            </Col>
          </FormGroup>
      </Form>
    </div>
    );
  }
}
