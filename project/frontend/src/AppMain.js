import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Test from './TestCase/Test';
import Submission from './Submission/Submission';
import Questions from './Question/Questions';
import Leaderboard from './Leaderboard/Leaderboard';
import Body from './CodingPage/Body';
import Result from './Result/Result';
import LogOut from './Log Out/LogOut';
import Nav from './Nav'

class AppMain extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/TestCase' component={Test} />
                        <Route exact path='/Submissions/:pk' component={Submission}/>
                        <Route exact path='/Questions' component={Questions} />
                        <Route exact path='/Leaderboard' component={Leaderboard}/>
                        <Route exact path='/Coding/:pk' component={Body} />
                        <Route exact path='/Result' component={Result} />
                        <Route exact path='/Logout' component={LogOut}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default withRouter(AppMain);