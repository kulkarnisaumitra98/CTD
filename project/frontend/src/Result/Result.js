import React from 'react'
import styled from 'styled-components'
import './result.css'
import axios from 'axios'
import Footer from '../CodingPage/Footer'

const Centerbox = styled.div`
height: 86vh;
width: 100%;
justify-content: center;
// border: 1px solid red;
`;
const BottomBox = styled.div`
color:white;
height:7vh;
font-size:3vh;
display:flex;
justify-content: center;
text-align: center;
background-color: black;
width:100%;

`;

class Result extends React.Component {

    constructor(props) {
        super(props)

        this.hostUrl = 'http://' + window.location.host
    }

    state = {
        users: [
        ],
        score : '',
        counter : null,
        name : '',
        promise: false,
    }

    componentDidMount() {
        const url = this.hostUrl + '/Result/'
        axios.get(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).then(
            response => {
                console.log(response)
                this.setState({
                    users: [...response.data.users.slice(0,3)],
                    score: response.data.score,
                    counter: response.data.counter,
                    name: response.data.name,
                    promise: true,
                })
            }
        )
    }

    render() {
        return (

            <div>

                <Centerbox >
                    <div className="teamname123">
                    <h1> {this.state.name}</h1>
                     
                    </div>
                <div className="cache">
                    <div className="row ">
                        <div className="rankres">
                            RANK
                                  <div className="content12">{this.state.counter}</div>
                        </div>
                        <div className="scoreit">
                            Score
                        <div className="content12">{this.state.score}</div>
                        </div>
                    </div>
                    </div>


                         <div id="resultboard">
                        <div id="resultpage">
                            <table className="ltableupes">
                                <tbody>
                                    <tr className="">
                                        <th className="resultrank">Rank</th>
                                        <th className="resultname">Team Name</th>
                                        <th className="totalscresult">Total</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="resulttable">
                        <table className="ltabledownres table-striped">
                            <tbody>
                                {
                                    this.state.users.map((user,index) => (
                                        <tr className="rowtable" key={user.username}>
                                            <td className="resultrankd">{index+1}</td>
                                            <td className="resultnamed">{user.username}</td>
                                            <td className="totalscresultd">{user.totalScore}</td>
                                        </tr>

                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </Centerbox>
                <Footer/>
            </div>
        )
    }
}
// 59 to 102 submission page and change result.css style names
export default Result
