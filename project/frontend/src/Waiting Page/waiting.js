import React from 'react'
import Main from './Main'
import axios from 'axios'

class waiting extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.x = null
    }

    componentDidMount() {
        
        this.x = setInterval(() =>
            axios.get('/getTime').then(
                response => {
                    console.log(response.data.time)
                    
                    if(response.data.time > 0) {
                        clearInterval(this.x)

                        this.props.history.push('/player/1')
                    }
                    //console.log(response)
                }
            )
        ,2500)
    }

    render() {
        return (
            <div >
                <Main />
            </div>
        )
    }
}

export default waiting