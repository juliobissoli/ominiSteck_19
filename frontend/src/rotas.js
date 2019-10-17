import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';

// import Login from './paginas/Login'
import Login from './paginas/Login';
import Novo from './paginas/Novo';
import Painel from './paginas/Painel';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact  component={Login}/>
                <Route path="/novo"  component={Novo}/>
                <Route path="/painel"  component={Painel}/>

            </Switch>
        </BrowserRouter>
    );
}