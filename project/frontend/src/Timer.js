import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Timer extends Component {
    constructor(props){
        super(props)
        
        this.interval = null
    }

    state = {
        time:this.props.time,
        stringTime:''
    }

    calTimer = (time) => {
        let x = time

        const hour = Math.floor(x / 3600)
        let min = Math.floor((x % 3600) / 60)

        if(min < 10) {
            min = '0' + min    
        }

        let sec = (x % 3600) % 60

        if(sec < 10) {
            sec = '0' + sec
        }
        
        const stringTime = "0" +  hour + ':' + min + ':' + sec

        x -= 1

        if(this.state.time <= 0) {
            clearInterval(this.interval)

            this.props.history.push('/Result')
        }

        this.setState({
            time:x,
            stringTime:stringTime
        })
        
        
    }

    componentDidMount(){
        this.interval = setInterval(() => this.calTimer(this.state.time),1000)
    }


    render() {
        return (
            <div style={{color: 'white' }}>
                {this.state.stringTime}
            </div>
        )
    }
}

export default withRouter(Timer)