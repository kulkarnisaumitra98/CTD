import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut'
import './question.css'


const Navbar = (props) => {
    return (
        <div className="headhere">QUESTION HUB
                    <div className="row butquesbox">
                <div className="box">
                    <NavLink to="/Leaderboard"> <button className=" btn but2">LEADERBOARD</button></NavLink>
                </div>
                <div className="box">
                    <LogOut />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
