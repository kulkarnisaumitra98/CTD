import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut'
import axios from 'axios'
import Timer from '../Timer'
// import Logout from '../CodingPage/Logout';


class Navbar extends React.Component {
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
        return (
            <nav className="navigation navbar navbar-expand-lg">
                <div className="row">
                    <div className="headhere">QUESTION HUB</div>
                    {time}
                    <div className="row butquesbox">
                        <div className="box">
                            <NavLink to="/Leaderboard"> <button className=" btn but2">LEADERBOARD</button></NavLink>
                        </div>
                        

                        <div className="box">
                            <LogOut />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
