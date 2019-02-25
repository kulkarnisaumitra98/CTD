import React, { Component } from 'react'
import './player.css'
import Footer from './Footer';
import NCC from './NCC.png'
import Ctd from '../../../frontend/static/frontend/ctdlogowhite.png'

import styled from 'styled-components'
const Player = styled.div`
    height:70vh;
    width: 30vw;
    border: 0px solid yellow;
    justify-content:center;
    background-color: rgba(25, 107, 107, 0.197);
    border-radius:10px;
`;

class Player2 extends Component {

    constructor(props) {
        super(props)
    
      //  console.log(this.props)
    }

    state = {
        player1 : this.props.history.location.state,
        name: '',
        email:'',
        phone: '',
    }

    setInput = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        if(this.state.name == ''){
            alert('Enter valid name')
        
        return false;
        }

        let phoneno = /^\d{10}$/;

        let regemail = /[@]/;

        if(!this.state.phone.match(phoneno)) {
            alert('Enter valid phone number')

        return false;
        }

        
        if(! this.state.email.match(regemail)) {
            alert('Enter valid email')

            return false;
        }

    return true;
    }

    onClickHandler = (flag) => {
        
        let params = this.state
        params['host'] = window.location.host

        if(flag) {
            this.props.history.push('/player/username', params)
        
        return;
        }

        if(this.validateForm()) {
            
            this.props.history.push('/player/username', params)
    
        }
    }


    render() {
        return (
            <div >
                <div className="navigatelogin  navbar navbar-expand-lg">
                <img src={NCC} height="40px" width="50px"/>
                <img src={Ctd} height="40px" width="50px" style={{marginLeft:"90vw"}}/>

                </div>
                <div className="container-fluid centerboxlogin">
                   <div className="row">
                    <div className="playerbox">
                        <Player>

                            <div className="playerdet">
                            <div className="playerhead">PLAYER 2</div>

                                <div className="row">

                                    <div className="inp1 mt-5">
                                        <input
                                            required
                                            onChange={this.setInput}
                                            style={{
                                                width: "55%",
                                                border: "none",
                                                borderBottom: "2px solid black",
                                                backgroundColor: "transparent",
                                                color: "white"
                                            }}
                                            type="text"
                                            name='name'
                                            placeholder='Name'
                                            value={this.state.name}
                                            autoComplete="off"

                                        />

                                    </div>

                                    <div className="inp1">

                                        <input
                                            required
                                            style={{
                                                width: "55%",
                                                border: "none",
                                                borderBottom: "2px solid black",
                                                backgroundColor: "transparent",
                                                color: "white"
                                            }}
                                            onChange={this.setInput}
                                            type="email"
                                            name='email'
                                            placeholder='Email ID'
                                            
                                            value={this.state.email}
                                            autoComplete="off"
                                        />

                                    </div>
                                    <div className="inp1">

                                        <input
                                            required
                                            onChange={this.setInput}
                                            style={{
                                                width: "55%",
                                                border: "none",
                                                borderBottom: "2px solid black",
                                                backgroundColor: "transparent",
                                                color: "white"
                                            }}
                                            type="text"
                                            name='phone'
                                            placeholder='Phone Number'
                                            value={this.state.phone}
                                            autoComplete="off"

                                        />

                                    </div>
                                    <div className="inp1">
                                        <button className="btn butpros mt-5  " onClick={() => this.onClickHandler(false)}> NEXT </button>
                                        <button className="btn butpros mt-5" onClick={() => this.onClickHandler(true)}> SKIP </button>

                                    </div>
                                </div>
                            </div>
                        </Player>

                    </div>
                    </div>
                </div>
                <Footer />

            </div>
           
        )
    }

}

export default Player2;


