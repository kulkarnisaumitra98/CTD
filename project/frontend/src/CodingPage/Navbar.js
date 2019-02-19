import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './coding.css'
import LogOut from '../Log Out/LogOut';

const Navbar = (props) => {

    return (
        <nav className="navig navbar navbar-expand-lg">
            <div className="row">
                <div className="head">CODING PAGE</div>
                <div className="row movbutleft">
                    <div className="buttonbox">
                        <Link to={"/Submissions/" + props.match.params.pk}><button className="but1 btn">SUBMISSION</button></Link>
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

export default withRouter(Navbar)
