import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut';

const Navbar = (props) => {
    return (
        <div className="headhere">SUBMISSION
                    <div className="row butbox">
                <div className="box">
                    <NavLink to="/Questions"> <button className="btn but2">QUESTION HUB</button></NavLink>
                </div>
                <div className="box">
                    <NavLink to="/Leaderboard"> <button className="btn but2">LEADERBOARD</button></NavLink>
                </div>
                <div className="box">
                    <LogOut />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
