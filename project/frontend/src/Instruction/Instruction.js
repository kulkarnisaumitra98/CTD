import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './instruction.css'
import Footer from '../CodingPage/Footer';
import NCC from '../../../frontend/static/frontend/NCC.png'
import Ctd from '../../../frontend/static/frontend/ctdlogowhite.png'

class Instruction extends React.Component {

    render() {
        return (
            <div>
                <div className="navig navbar navbar-expand-lg">
                <img src={NCC} height="80px" width="90px" style={{marginLeft:"-1.5vw"}}/>
                <img src={Ctd} height="40px" width="60px" style={{marginLeft:"88vw"}}/>

                </div>
                <div className="centerbox container-fluid">
                    <div className="titles">INSTRUCTIONS</div>
                    <div className="content">
                        <div className="insidecontent">
                            <ul>
                                <li >This round comprises of 6 questions</li>
                                <li  className="lli">All questions have marking scheme +4,-2.The time duration of the event is 3 hours only.This is the second round.</li>
                                <li  className="lli">This round comprises of 6 questions</li>
                                <li  className="lli">This round comprises of 6 questions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="proceed">
                        <Link to="/Questions"><button className="btn butpro">PROCEED</button></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Instruction)

//Added btn to proceed btn
//Link gets converted to NavLink
//And outside Button class
///added a class lli to instructions