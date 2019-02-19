import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './style.css'
import Footer from '../CodingPage/Footer'


class Main extends React.Component {
    constructor(props) {
        super(props)

        //console.log(this.props)

    }
    
    render() {
        return (
            <div>
                <div className="navig "></div>
                <div className="centerbox">
                    <div className="titles">Instructions</div>
                    <div className="content">
                        <div className="insidecontent">
                        <ul>
                            <li>This round comprises of 6 questions</li>
                            <li className="lli">All questions have marking scheme +4,-2</li>
                            <li className="lli">Placeholder</li>
                            <li className="lli">Placeholder</li>
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

export default withRouter(Main)
