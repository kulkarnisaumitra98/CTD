import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut';
import './leaderboard.css'


const Navbar = () => {
    return (
        <div className="headhereleader">LEADERBOARD
                    <div className="row butleadbox">
                <div className="boxlead">
                    <NavLink to="/Questions"><button className="btn but9">QUESTION HUB</button></NavLink>
                </div>
                <div className="boxlead">
                    <LogOut />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
