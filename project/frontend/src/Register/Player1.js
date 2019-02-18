import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Player1 extends Component {
    constructor(props) {
        super(props)

        //console.log(this.props)
    }

    state = {
        name: '',
        phone: '',
    }

    setInput = (event) => {
        const { name, value } = event.target

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

    onClickHandler = () => {

        if (this.validateForm()) {

            const params = this.state

            this.props.history.push('/player/2', params)
        }
    }


    render() {
        return (
            <div>
                <h1>Enter the details of Player 1</h1>
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
                <br />
                <button onClick={this.onClickHandler}> Player 2 </button>
            </div>
        )
    }

}

export default Player1;