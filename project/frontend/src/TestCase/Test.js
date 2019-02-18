import React from 'react'
import Testcase from './Testcase';
import styled from 'styled-components'
import Navbar from '../CodingPage/Navbar';
import Footer from '../CodingPage/Footer';
import axios from 'axios'


const DivHere = styled.div`
    width:100%;
    height:35vh;
    border:0px solid red;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const MainBoxleft = styled.div`
    height:86vh;
    width:60%;
    border: 0px solid black;
    
`;
const MainBoxright = styled.div`
    height:86vh;
    width:40%;
    border: 0px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const BottomBox = styled.div`
    height:16vh;
    width:100%;
    border:0px solid red;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ScoreBox = styled.div`
    height:8vh;
    width:30%;
    border:2px solid green;
    margin-right:5vw;
`;

const Console= styled.div`
    height:64vh;
    width:30vw;
    border:3px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:4.5vw;

`;

const ConsoleBox= styled.div`
    height:10vh;
    width:30vw;
    border:3px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:4.5vw;


`;

class Test extends React.Component {
    constructor(props){
        super(props)
        //console.log(this.props.history.location.state)
    }

    state = {
        loading: true,
        status: null,
        testlist: [],
        error: '',
        score : '',
    }

    componentDidMount() {
        const url = '/Coding/' + this.props.history.location.state.q_id

        axios.post(url, this.props.history.location.state).then(
            response => {
                //console.log(response)
                if(response.request.status == 200) {
                    this.setState({
                        loading: false,
                        status: response.data.status,
                        error:response.data.e,
                        testlist: [...response.data.testlist],
                        score: response.data.score,
                    })
                }
            }
        )
    }

    render() {
        //console.log(this.props)
        //console.log(this.state.loading)
        return (
            <div>
                <Navbar/>

            <section className="container-fluid bigbody">

                <MainBoxleft>
                    <DivHere>
                        
                        <Testcase state={this.state} id='1'/>
                        <Testcase state={this.state} id='2'/>
                    </DivHere>
                    <DivHere>
                        <Testcase state={this.state} id='3'/>
                        <Testcase state={this.state} id='4'/>
                        <Testcase state={this.state} id='5'/>


                    </DivHere>
                    <BottomBox>
                        <ScoreBox>{this.state.status}</ScoreBox>
                        <ScoreBox>{this.state.score}</ScoreBox>

                    </BottomBox>
                </MainBoxleft>
                <MainBoxright>
                    <div className="row">
                    <ConsoleBox>

                    </ConsoleBox>
                    <Console>

                    </Console>
                    </div>
                </MainBoxright>


            </section>
            <Footer/>
            </div>
        )
    }




}

export default Test

