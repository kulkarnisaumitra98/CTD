import React from 'react'
// import Navbar from '../CodingPage/Navbar'
// import Body from '../CodingPage/Body'
// import Footer from '../CodingPage/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Questions from './Questions';
import AppCoding from '../CodingPage/AppCoding'
function AppQuestion() {


    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/Coding/:pk' component={AppCoding}/>
                    <Route path='/Questions' component={Questions} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default AppQuestion