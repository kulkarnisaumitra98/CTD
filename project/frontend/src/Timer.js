import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Timer extends Component {
    constructor(props){
        super(props)
        
        this.x = null
    }

    state = {
        flag:true,
        time:this.props.time,
        stringTime:''
    }

    calTimer = (time) => {
        let x = time
        x -= 1

        this.setState({
            time: x
        })
        
        

        //console.log(time)
        const hour = Math.floor(time / 3600)
        const min = Math.floor((time % 3600) / 60)
        const sec = (time % 3600) % 60
        const stringTime = "" +  hour + ':' + min + ':' + sec

        this.setState({
            stringTime:stringTime
        }) 
    }

    componentDidMount(){
        this.x = setInterval(() => this.calTimer(this.state.time),1000)
    }


    render() {
        return (
            <div style={{ marginLeft: '45vw', color: 'white' }}>
                {this.state.stringTime}
            </div>
        )
    }
}

export default withRouter(Timer)