
import React from 'react';
import Principal from './Principal';
import Formulario from './Formulario';
import {Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import Topo from './Topo';
import Footer from './Footer';

export default class Rotas extends React.Component  {
	render(){
		return(
	<Router>
         <div>
         	<Topo/>
           <Switch>
                <Route  path="/" exact component={ Principal }/>
                <Route  path="/novo" component={ Formulario }/>
           </Switch>
           <Footer/>
        </div>
     </Router>
   		);
	}
}
