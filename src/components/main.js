import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Portfolio from './portfolio';
import Aboutme from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

const Main = () => {
    return(
        <Switch>
        <Route exact path="/" component = {Landingpage}></Route>
        <Route path="/portfolio" component ={Portfolio}></Route>
        <Route path="/aboutme" component ={Aboutme}></Route>
        <Route path="/resume" component ={Resume}></Route>
        <Route path="/contact" component ={Contact}></Route>
        <Route path="/projects" component ={Projects}></Route>
    </Switch>
    )
    
}

export default Main;