import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut';
import './submission.css'

const Navbar = () => {
    return (
        <div className="headheresub">SUBMISSION
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
