import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './coding.css'
//import Logout from './Logout';


const Navbar = (props) => {
    return (
        <nav className="navig navbar navbar-expand-lg">
            <div className="row">
                <div className="head">CODING PAGE</div>
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
                        <button className="but1"></button>
                        {/* <button className="but1"><Link to="/Result">LOG OUT</Link></button> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
