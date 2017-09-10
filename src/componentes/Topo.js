
import React from 'react';
import agenda from '.././imagem/agenda1.png';
import { Container,Input,InputGroup,InputGroupAddon,Button,Breadcrumb,BreadcrumbItem} from 'reactstrap';
export default class Topo extends React.Component  {
  render(){
  return(
    <div id="layout">
    <div>
      <img src={agenda} className="agenda" alt="agenda" />
    </div>
        <Breadcrumb tag="nav">
          <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="/novo">Cadastro</BreadcrumbItem>
        </Breadcrumb>

        <Container>
          <InputGroup size="md">
                <InputGroupAddon>Pesquisa</InputGroupAddon><Input />
                <Button color="primary">Buscar</Button>{' '}
              </InputGroup>
        </Container>
        <hr />
    </div>
    );
}
}

