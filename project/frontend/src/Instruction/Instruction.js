import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './instruction.css'
import Footer from '../CodingPage/Footer';

class Instruction extends React.Component {

    render() {
        return (
            <div>
                <div className="navig navbar navbar-expand-lg"></div>
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
                        <Link to="/Question"><button className="btn butpro">PROCEED</button></Link>
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