import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import Logout from '../CodingPage/Logout';


const Navbar = () => {

    return (
        <nav className="navigation navbar navbar-expand-lg">
            <div className="row">
                <div className="headhere">LEADERBOARD</div>
                <div className="row butbox">
                    <div className="box">
                        <button className="but2"><Link to="/Questions">QUESTION HUB</Link></button>
                    </div>
                    <div className="box">
                        <button className="but2"></button>
                        {/* <Logout/> */}
                        {/* <button className="but1"><Link to="/Result">LOG OUT</Link></button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
