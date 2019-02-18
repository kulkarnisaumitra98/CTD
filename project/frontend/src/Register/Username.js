import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


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
        level: 'senior'
    }

    componentDidUpdate() {
        console.log(this.state.level)
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
                <h1>Enter the Username and Password </h1>
                <form>
                    <input
                        onChange={this.setInput}
                        type="text"
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onKeyUp={() => this.checkUser(this.value)}
                    />
                    <br />
                    <input
                        onChange={this.setInput}
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                    />
                    <br />
                    <div>
                        Junior
                            <input
                            onClick={this.setInput}
                            type='radio'
                            name='level'
                            value='junior'
                        />

                        Senior
                            <input
                            onClick={this.setInput}
                            type='radio'
                            defaultChecked name='level'
                            value='senior'
                        />
                    </div>
                    <br />
                </form>
                <br />
                <button onClick={this.postHandler}>Submit</button>
            </div>
        )
    }

}

export default withRouter(Username);