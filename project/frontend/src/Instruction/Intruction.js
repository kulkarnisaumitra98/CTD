import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './style.css'


class Main extends React.Component {
    constructor(props) {
        super(props)

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
                            <li>All questions have marking scheme +4,-2</li>
                            <li>Placeholder</li>
                            <li>Placeholder</li>
                        </ul>
                        </div>
                    </div>
                    <div className="proceed">
                        <button ><Link to='/Questions'>PROCEED</Link></button>
                    </div>
                </div>
                <div className="footer">© PICT IEEE STUDENT BRANCH</div>
            </div>
        )
    }
}

export default withRouter(Main)
