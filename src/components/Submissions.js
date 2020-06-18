import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Submissions() {
        return(
            <>
            <h2><Link to="submissions/1">Hello</Link></h2>
                <Route path="/submissions/1" render={() => {
                                    return (
                                        <h2>!dgsjtut</h2>
                                    )
                                }}>
                </Route>
            </>
        )
}