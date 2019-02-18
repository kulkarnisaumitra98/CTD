import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

// import Logout from '../CodingPage/Logout';


const Navbar = () => {

    return (
        <nav className="navigation navbar navbar-expand-lg">
            <div className="row">
                <div className="headhere">SUBMISSION</div>
                <div className="row butbox">
                    <div className="box">
                        <NavLink to="/Questions"> <button className="but2">QUESTION HUB</button></NavLink>
                    </div>
                    <div className="box">
                        <NavLink to="/Leaderboard"> <button className="but2">LEADERBOARD</button></NavLink>
                    </div>
                    <div className="box">
                        <button className="but2">LOG OUT</button>
                        {/* <Logout/> */}
                        {/* <button className="but1"><NavLink to="/Result">LOG OUT</NavLink></button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
