import React from 'react';
import {Route} from 'react-router-dom';
import Auth from '../Auth';
import Chatroom from '../Chatroom';
import Home from '../Home';
const Routes = () => (
    <>
        <Route path="/signup" exact render={(prop) => <Auth {...prop} signup/> } />
        <Route path="/signin" exact render={(prop) => <Auth {...prop}/> } />
        <Route path="/chatroom" exact render={(prop) => <Chatroom {...prop}/> } />
        <Route path="/" exact render={(prop) =><Home {...prop}/> } />
    </>
)
export default Routes;