import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Submissions extends React.Component {
    render() {
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
}

export default Submissions;