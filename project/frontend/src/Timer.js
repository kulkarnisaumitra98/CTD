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
        const min = Math.floor((x % 3600) / 60)
        const sec = (x % 3600) % 60
        const stringTime = "" +  hour + ':' + min + ':' + sec

        x -= 1

        this.setState({
            time:x,
            stringTime:stringTime
        })
        
        
    }

    componentDidMount(){
        this.interval = setInterval(() => this.calTimer(this.state.time),1000)
    }

    componentWillUnmount() {
        if(this.state.time <= 0) {
            clearInterval(this.x)

            this.props.history.push('/Result')
        }
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