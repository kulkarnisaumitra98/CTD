import React from 'react'
import Timer from './Timer'
import {withRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import NavLeader from './Leaderboard/NavLeader';
import NavTest from './TestCase/NavTest';
import NavSub from './Submission/NavSub';
import NavbarQues from './Question/NavbarQues';
import Navbar from './CodingPage/Navbar';


class Nav extends React.Component {
    state = {
        time:null
    }

    componentDidMount() {
        axios.get('/getTime').then(
            response => {
                //console.log(response)
                this.setState({
                    time:response.data.time
                })
            }
        )
    }

    render() {
        const time = this.state.time ? (
            <Timer time={this.state.time}/>

        ) : (
            <p>Loading</p>            
        )

        return(
            <div>
                <nav className="navig navbar navbar-expand-lg">
                    <div className="row">
                        {time}
                        <Switch>
                            <Route exact path='/TestCase' component={NavTest} />
                            <Route exact path='/Submissions/:pk' component={NavSub} />
                            <Route exact path='/Questions' component={NavbarQues} />
                            <Route exact path='/Leaderboard' component={NavLeader} />
                            <Route exact path='/Coding/:pk' component={Navbar} />
                    </Switch>
                    </div>
                </nav>            
            </div>
        )
    }
}

export default withRouter(Nav);