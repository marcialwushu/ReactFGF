
import React from 'react';
import { Card, CardText,CardTitle, Row, Col,Button } from 'reactstrap';
export default class Principal extends React.Component {

	render(){
		return(
				<div id="todo">
					<Row>
				      <Col sm="4">
				        <Card block>
				          <CardTitle>Special Title Treatment</CardTitle>
				          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				          <Button>Go somewhere</Button>
				        </Card>
				      </Col>
				      <Col sm="4">
				        <Card block>
				          <CardTitle>Special Title Treatment</CardTitle>
				          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				          <Button>Go somewhere</Button>
				        </Card>
				      </Col>
				      <Col sm="4">
				        <Card block>
				          <CardTitle>Special Title Treatment</CardTitle>
				          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				          <Button>Go somewhere</Button>
				        </Card>
				      </Col>
    				</Row>
				</div>
			);
	}
}
