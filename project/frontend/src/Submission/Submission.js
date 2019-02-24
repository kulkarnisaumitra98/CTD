import React from 'react'
import Footer from '../CodingPage/Footer';
import axios from 'axios'
import './submission.css'
import NavSub from './NavSub';
import {withRouter} from 'react-router-dom'
import Nav from '../Nav'

class Submission extends React.Component {

    constructor(props){
        super(props)

        this.hostUrl = 'http://' + window.location.host
    }

    state = {
       user: [
           {
                sub:'',
                subtime:'',
                testCaseScore:0,
                status:''
           }
        ],
        promise:false
    }

    onClickHandler = (index) => {
        this.props.history.push('/Coding/' + this.props.match.params.pk, {submission: this.state.user[index].sub})
    }

    componentDidMount() {
        const url = this.hostUrl + '/Submissions/' + this.props.match.params.pk
        axios.get(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).then(
            response => {
                //console.log(response.data.data)
                const list = [...response.data.data].reverse()
                //console.log(list)

                this.setState({
                    user: list,
                    promise:true
                })

            }
        )
    }


    render() {
        let text = []

        if(this.state.promise) {
            for (var i = 0; i < this.state.user.length; i++) {
                if (this.state.user[i].status === 'A.C') {
                    text[i] = (
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-success"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: this.state.user[i].testCaseScore + "%" }}
                            >
                            </div>
                        </div>
                    )
                }

                else {
                    text[i] = (
                    <div className="substat">
                       {    this.state.user[i].status}
                    </div>
                    )
                }
            }
        }
        
        

        return (
            <div>
                <section className="container-fluid submiss">
                    <div className="ab">
                        <div className="subbox">
                            <div className="headingsub text-center">
                                <h3>SUBMISSION</h3>
                            </div>
                        </div>

                        <div className="SubSubbox">
                            <div className="Submissionsub">
                                <table className="tableupsub">
                                    <tbody>
                                        <tr className="borderline">
                                            <th className="ranksub">SR NO.</th>
                                            <th className="timeSub">TIME</th>
                                            <th className="status">STATUS</th>
                                            <th className="status"></th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="submisstable">
                                    <table className="tabledown table-striped">
                                        <tbody>
                                            {this.state.user.map((user, index) => (
                                                <tr className="borderline" key={index}>
                                                    <td className="sr">{index + 1}</td>
                                                    <td className="timeSubd">{user.subtime}</td>
                                                    <td className="progsub">
                                                        {text[index]}
                                                    </td>
                                                    <td className="butty"><button className='btn butbut123' onClick={() => this.onClickHandler(index)} >VIEW</button></td>

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



export default withRouter(Submission)