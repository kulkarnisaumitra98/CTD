import React from 'react'
import Testcase from './Testcase';
import styled from 'styled-components'
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



const ConsoleBox= styled.div`
    height:9vh;
    width:30vw;
    border:solid 3px rgb(6, 133, 133);
    border-radius:10px;
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:4.5vw;
    color:rgba(233,233,233,0.98);
    font-size:2.9vh;

`;

const P= styled.p`
    margin-left:5vw;
    margin-right:1vw;
    font-size:3vh;
    margin-top:1.5vh;
    color: rgb(192, 201, 201);


`;

class Test extends React.Component {
    constructor(props){
        super(props)
        //console.log(this.props)
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

        axios.post(url, this.props.history.location.state, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).then(
            response => {
                console.log(response)
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
                        <P>SCORE:</P>
                        <div className="ScoreBox">{this.state.score}</div>
                        <button className='btn buttest'>RETRY</button>
                        <P>STATUS:</P>
                        <div className="StatusBox">{this.state.status}</div>

                    </BottomBox>
                </MainBoxleft>
                <MainBoxright>
                    <div className="row">
                    <ConsoleBox>
                        CONSOLE
                    </ConsoleBox>
                    <div className="Console">
                        {this.state.error}
                    </div>
                    </div>
                </MainBoxright>


            </section>
            <Footer/>
            </div>
        )
    }




}

export default Test

