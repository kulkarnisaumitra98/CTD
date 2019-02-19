import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import LogOut from '../Log Out/LogOut';

// import Logout from '../CodingPage/Logout';


const Navbar = () => {

    return (
        <nav className="navigation navbar navbar-expand-lg">
            <div className="row">
                <div className="headhere">LEADERBOARD</div>
                <div className="row butleadbox">
                    <div className="box">
                    <NavLink to="/Questions"><button className="btn but2">QUESTION HUB</button></NavLink>
                    </div>
                    <div className="box">
                    <LogOut/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
