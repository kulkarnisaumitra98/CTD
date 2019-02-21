import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Bg_text = styled.div`
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
color: white;
font-weight: bold;
border: 3px solid #f1f1f1;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
width: 80%;
padding: 20px;
text-align: center;
`;

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
                <Bg_text>
                    <h2>PLEASE WAIT</h2>
                    <h1>While You are being HACKED</h1>
                    <h5>Thank You for your Patience</h5>
                </Bg_text>
            </div>
        )
    }
}

export default waiting