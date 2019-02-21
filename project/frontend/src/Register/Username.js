import React, { Component } from 'react'
import './player.css'
import Footer from './Footer';
import axios from 'axios'
import './NCC.png'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Player = styled.div`
    height:70vh;
    width: 30vw;
    border: 0px solid yellow;
    justify-content:center;
    background-color: rgba(25, 107, 107, 0.197);
    border-radius:10px;
`;

class Username extends Component {

    constructor(props) {
        super(props)

        this.usernameError = false
        this.hostUrl = 'http://' + this.props.history.location.state.host
    }

    state = {
        name1: this.props.history.location.state.player1.name,
        name2: this.props.history.location.state.name,
        phone1: this.props.history.location.state.player1.phone,
        phone2: this.props.history.location.state.phone,
        username: '',
        password: '',
        level: 'junior'
    }

    setInput = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        if (this.state.username == '' || this.state.password == '') {
            alert('Enter valid username or password')

            return false;
        }

        return true;
    }

    postHandler = () => {
        
        if(this.usernameError) {
            alert('username already present')
        
        return;
        }

        if (this.validateForm()) {
            const url = this.hostUrl + '/player/1/'

            console.log(this.state)
            //console.log(url)

            axios({
                method: 'post',
                url: url,
                data: this.state
            })

            this.props.history.push('/instruction', this.state)
        }
    }


    checkUser = (value) => {

        const url = this.hostUrl + '/checkuser/'

        axios.post(url, this.state).then(
            (response) => {
                
                if(! response.data['is_success']) {
                    this.usernameError = true
                }
                else{
                    this.usernameError = false
                }
            }
        )
    }


    render() {
        return (
            <div>
                <div className="navigatelogin  navbar navbar-expand-lg"></div>
                    <div className="container-fluid centerboxlogin">
                         <div className="row">
                            <div className="playerbox">
                                <Player>    
                                    <div className="playerdet">
                                        <div className="playerhead">TEAM LOGIN</div>
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
                                                        name='username'
                                                        placeholder='Username'
                                                        value={this.state.username}
                                                        onKeyUp={() => this.checkUser(this.value)}
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
                                                type='password'
                                                 name='password'
                                                    placeholder='Password'
                                                value={this.state.password}
                                                autoComplete="off"
                                            />

                                            </div>
                                            
                    <div className="inp1">
                        Junior
                            <input
                            type='radio'
                            defaultChecked name='level'
                            value='junior'
                        />

                       <p style={{marginLeft:"2vh"}}> Senior</p>
                            <input
                            type='radio'
                            name='level'
                            value='senior'
                        />
                    </div>



                    <button onClick={this.postHandler}>Submit</button>

                    </div>
            </div>
        </Player>
    </div>
    </div>
</div>
<Footer/>
</div>
        )
    }

}

export default withRouter(Username);






             

                    

         