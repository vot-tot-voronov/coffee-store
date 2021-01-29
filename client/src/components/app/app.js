import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';

import { HomePage, CartPage, DeliveryPage } from '../pages';

import './app.scss';


const App = () => {
    return (
        <Switch>
            <Route path='/home' exact component={HomePage} />
            <Route path='/cart' component={CartPage}/>
            <Route path='/delivery' component={DeliveryPage}/>
            <Redirect from='/' to='/home' />
        </Switch>
    );
};

export default App;