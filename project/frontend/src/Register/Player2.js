import React, { Component } from 'react'

class Player2 extends Component {

    constructor(props) {
        super(props)
    
      //  console.log(this.props)
    }

    state = {
        player1 : this.props.history.location.state,
        name: '',
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

        if(!this.state.phone.match(phoneno)) {
            alert('Enter valid phone number')

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
            <div>
                <h1>Enter the details of Player 2</h1>
                <form >
                    <input
                        required
                        onChange={this.setInput}
                        type="text"
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        
                    />
                    <br />
                    <input
                        onChange={this.setInput}
                        type='tel'
                        name='phone'
                        placeholder='Phone'
                        value={this.state.phone}
                    />
                    <br />
                </form>
                <br/>
                <button onClick={() => this.onClickHandler(false)}>Username</button>
                <br/>
                <button onClick={() => this.onClickHandler(true)}>Skip</button>
                <br />

            </div>
        )
    }

}

export default Player2;