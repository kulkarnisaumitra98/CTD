import React from 'react'
import Body from './Body'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Questions from '../Question/Questions';
import Test from '../TestCase/Test';
import Result from '../Result/Result'
import Leaderboard from '../Leaderboard/Leaderboard';
import Submission from '../Submission/Submission';

function AppCoding() {

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/TestCase' component={Test} />
                    <Route path='/Submissions/:pk' component={Submission}/>
                    <Route exact path='/Questions' component={Questions} />
                    <Route path='/Leaderboard' component={Leaderboard}/>
                    <Route path='/Coding/:pk' component={Body} />
                    <Route path='/Result' component={Result} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default AppCoding