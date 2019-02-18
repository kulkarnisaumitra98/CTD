import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Player1 from './Player1'
import Player2 from './Player2'
import Username from './Username'
import {Route, Switch } from 'react-router-dom'

class Page extends React.Component {
    render() {
        return (

            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="row">
                    <Header />
                </div>
                <div className="container-fluid" style={{ height: "86vh" }}>
                    <div className="row">
                        <Switch>
                            <Route exact path='/player/2' component={Player2} />
                            <Route exact path='/player/1' component={Player1} /> 
                            <Route exact path='/player/username' component={Username} />
                        </Switch>
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Page;