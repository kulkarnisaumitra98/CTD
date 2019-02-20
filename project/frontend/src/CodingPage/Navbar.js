import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './coding.css'
import LogOut from '../Log Out/LogOut';


const Navbar = (props) => {
    return (
        <div className="head">CODING PAGE
            <div className="row bigbuttonbox">
                <div className="buttonbox">
                    <button className="but1"><Link to={"/Submissions/" + props.match.params.pk}>SUBMISSION</Link></button>
                </div>
                <div className="buttonbox">
                    <button className="but1"><Link to="/Questions">QUESTION HUB</Link></button>
                </div>
                <div className="buttonbox">
                    <button className="but1"><Link to="/Leaderboard">LEADERBOARD</Link></button>
                </div>
                <div className="buttonbox">
                    <LogOut/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
