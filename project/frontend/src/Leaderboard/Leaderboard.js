import React from 'react'
import NavLeader from './NavLeader';
import Footer from '../CodingPage/Footer';
import axios from 'axios'
import './leaderboard.css'

class Leaderboard extends React.Component {

    constructor(props) {
        super(props)

        this.hostUrl = 'http://' + window.location.host
    }

    state = {
        users: [
        ],
        promise: false,
    }

    componentDidMount() {
        const url = this.hostUrl + '/Leaderboard/'
        axios.get(url).then(
            response => {
                
                this.setState({
                    users: [...response.data.users],
                    promise: true,
                })
            }
        )
    }

    render() {
        return (
            <div>
                <NavLeader />
                <section className="container-fluid leader">
                    <div className="a">
                        <div className="Leaderbox">
                            <div className="heading text-center">
                                <h3>LEADERBOARD</h3>
                            </div>
                        </div>

                        <div className="LeaderLeaderbox">
                            <div className="Leaderboard">
                                <table className="tableup">
                                    <tbody>
                                        <tr className="line1">
                                            <th className="rank">Rank</th>
                                            <th className="team">Team Name</th>
                                            <th className="ques">Q1</th>
                                            <th className="ques">Q2</th>
                                            <th className="ques">Q3</th>
                                            <th className="ques">Q4</th>
                                            <th className="ques">Q5</th>
                                            <th className="ques">Q6</th>
                                            <th className="total">Total</th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="leadertable">
                                    <table className="tabledown table-striped">
                                        <tbody>
                                            {this.state.users.map((user, index) => (
                                                <tr className="line1" key={user.username}>
                                                    <td className="rank">{index + 1}</td>
                                                    <td className="team">{user.username}</td>
                                                    <td className="ques">{user.questionScores[0]}</td>
                                                    <td className="ques">{user.questionScores[1]}</td>
                                                    <td className="ques">{user.questionScores[2]}</td>
                                                    <td className="ques">{user.questionScores[3]}</td>
                                                    <td className="ques">{user.questionScores[4]}</td>
                                                    <td className="ques">{user.questionScores[5]}</td>
                                                    <td className="total">{user.totalScore}</td>

                                                </tr>
                                            )
                                            )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}



export default Leaderboard