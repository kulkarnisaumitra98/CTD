import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './test.css'
import LogOut from '../Log Out/LogOut';

// import Logout from './Logout';


const NavTest = () => {

    return (
        <nav className="navig navbar navbar-expand-lg">
            <div className="row">
                <div className="head">TEST CASE PAGE</div>
                <div className="row bigtestbox">
                    <div className="buttonbox">
                    </div>
                    <div className="buttonbox">
                        <Link to="/Questions">  <button className="but1 btn">QUESTION HUB</button></Link>
                    </div>
                    <div className="buttonbox">
                        <Link to="/Leaderboard">  <button className="but1 btn">LEADERBOARD</button></Link>
                    </div>
                    <div className="buttonbox">
                    <LogOut/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(NavTest)
