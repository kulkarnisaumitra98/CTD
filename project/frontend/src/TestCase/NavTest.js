import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './test.css'
import LogOut from '../Log Out/LogOut';


const NavTest = (props) => {
    return (
        <div className="head">TEST CASE PAGE
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
                    <LogOut />
                </div>
            </div>
        </div>
    )
}


export default withRouter(NavTest)
