import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './coding.css'
import LogOut from '../Log Out/LogOut';


const Navbar = (props) => {
    return (
        <div className="head">

            CODING PAGE
            <div className="row movbutleft">
                <div className="buttonboxcode">
                <Link to={"/Submissions/" + props.match.params.pk}><button className=" btn but0">SUBMISSION</button></Link>
                </div>
                <div className="buttonboxcode">
                <Link to="/Questions"><button className="btn but0">QUESTION HUB</button></Link>
                </div>
                <div className="buttonboxcode">
                <Link to="/Leaderboard"><button className="btn but0">LEADERBOARD</button></Link>
                </div>
                <div className="buttonboxcode">
                    <LogOut/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
