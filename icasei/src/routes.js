import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Initial from './pages/initial';
import VideoList from './pages/videolist';
import VideoDetails from './pages/videodetails';
 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Initial} />
            <Route path='/videolist/' component={VideoList} />
            <Route path='/videodetails/:id' component={VideoDetails} />
        </Switch>
    </BrowserRouter>
);

export default Routes;