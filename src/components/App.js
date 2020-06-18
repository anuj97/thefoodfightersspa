import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer';
import Submissions from './Submissions';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

export default function  App() {
   return(
      <>
         <Router>
            <Navbar/>
            <Switch>
               <Route exact path="/" component={HomePage}>
               </Route>
               <Route path="/submissions">
                  <Submissions></Submissions>
               </Route>
            </Switch>
         </Router>
         <Footer/>
      </>
   );
}




