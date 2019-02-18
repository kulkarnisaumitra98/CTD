import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Bg_image = styled.div`
/* The image used */
  background-image: url("blacky.jpg");
  
  /* Add the blur effect */
  filter: blur(30px);
  -webkit-filter: blur(3px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

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

class Main extends React.Component {

    render() {
        return (
            <div>
                <Bg_text>
                    <h2>PLEASE WAIT</h2>
                    <h1>While You are being HACKED</h1>
                    <h5>Thank You for your Patience</h5>
                </Bg_text>
                <Link to='/player/1'>Register</Link>
            </div>
        )
    }
}

export default Main