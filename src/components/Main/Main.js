import React from 'react'
import { Route, Switch } from "react-router-dom";
import "./Main.scss"
import Home from "../../pages/Home/Home"
import Calculator from "../../pages/Calculator/Calculator"
 import Team from '../../pages/Team/Team';
 import Contact from '../../pages/About/About';

 

const Main = () => {
  return (
    <div>
       <Switch>
       <Route exact path="/" component={Home}  />
       <Route path="/calculator" component={Calculator} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />

 




        </Switch>
 
    </div>
  )
}

export default Main
