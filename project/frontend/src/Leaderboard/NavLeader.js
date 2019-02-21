import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut';
import './leaderboard.css'


const Navbar = () => {
    return (
        <div className="headhere">LEADERBOARD
                    <div className="row butleadbox">
                <div className="box">
                    <NavLink to="/Questions"><button className="btn but2">QUESTION HUB</button></NavLink>
                </div>
                <div className="box">
                    <LogOut />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
