import React from 'react'
import Timer from './Timer'
import {withRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import NavLeader from './Leaderboard/NavLeader';
import NavTest from './TestCase/NavTest';
import NavSub from './Submission/NavSub';
import NavbarQues from './Question/NavbarQues';
import Navbar from './CodingPage/Navbar';
import styled from 'styled-components'
import Ctd from '../../frontend/static/frontend/ctdlogowhite.png'
import NCC from '../../frontend/static/frontend/NCC.png'

const Timerhere=styled.div`
margin-left:29vw;
display:flex;
justify-content:center;
align-items:center;
border:0px solid red;
height:7vh;
width:12vw;
font-size:3.6vh;
color:white;
margin-top:2.4vh;



`;

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
                    <img src={NCC} height="80px" width="80px" style={{marginTop:"1vh",marginLeft:"0vw"}}/>

                    <Timerhere>{time}</Timerhere>                        
                    <Switch>
                            <Route exact path='/TestCase/:id' component={NavTest} />
                            <Route exact path='/Submissions/:pk' component={NavSub} />
                            <Route exact path='/Questions' component={NavbarQues} />
                            <Route exact path='/Leaderboard' component={NavLeader} />
                            <Route exact path='/Coding/:pk' component={Navbar} />
                        </Switch>
                        <img src={Ctd} height="40vh" style={{marginTop:"-8vh",marginLeft:"3vw"}}/>

                    </div>
                </nav>            
            </div>
        )
    }
}

export default withRouter(Nav);