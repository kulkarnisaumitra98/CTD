import React from 'react'
import NavbarQues from './NavbarQues'
import Footer from '../CodingPage/Footer'
import Question from './Question'
import axios from 'axios';
import './question.css'

class Questions extends React.Component {
    constructor(props) {
        super(props)

        this.hostUrl = 'http://' + window.location.host
    }

    state = {
        questions: [],
        promise : false
    };

    componentDidMount() {
        const url = this.hostUrl + '/Questions/'
        axios.get(url).then(
            response => {
                this.setState({
                    questions: [...response.data.data],
                    promise : true,
                })
            }
        )
    }

    render() {
         return (
            <div>
            <NavbarQues />
                <section className="container-fluid queshub ">

                    <div className="part1">
                        <Question 
                            id='1' 
                            question={this.state.questions[0]} 
                            promise={this.state.promise}/>
                        <Question 
                            id='2' 
                            question={this.state.questions[1]} 
                            promise={this.state.promise}/>
                        <Question 
                            id='3' 
                            question={this.state.questions[2]} 
                            promise={this.state.promise}/>
                        
                        {/* {this.state.questions.slice(0, 3).map(
                            (question) => {
                                console.log(question)
                                return (<Question
                                    key={question.id}
                                    id={parseInt(question.id) + 1}
                                    title={question.questionTitle}
                                    promise={this.state.promise}
                                />)
                            }
                        )} */}
                    </div>
                    {/* DOWN PART */}

                    <div className="part2">
                        <Question 
                            id='4' 
                            question={this.state.questions[3]} 
                            promise={this.state.promise}/>
                        <Question 
                            id='5' 
                            question={this.state.questions[4]} 
                            promise={this.state.promise}/>
                        <Question 
                            id='6' 
                            question={this.state.questions[5]} 
                            promise={this.state.promise}/>
                        
                        {/* {this.state.questions.slice(3, 7).map(
                            (question) => {
                                console.log(question)
                                return (<Question
                                    key={question.id}
                                    id={parseInt(question.id) + 1}
                                    title={question.questionTitle}
                                    promise={this.state.promise}
                                />)
                            }
                        )} */}
                    </div>
                </section >
                <Footer />
            </div >
        )
    }


}

export default Questions