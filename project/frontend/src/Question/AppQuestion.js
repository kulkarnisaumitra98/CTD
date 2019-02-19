import React from 'react'
// import Navbar from '../CodingPage/Navbar'
// import Body from '../CodingPage/Body'
// import Footer from '../CodingPage/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Questions from './Questions';
import AppCoding from '../CodingPage/AppCoding'
import Timer from '../Timer'
import axios from 'axios'

class AppQuestion extends React.Component {
    //console.log('I am in App Questions')

    state = {
        time:null
    }

    componentDidMount() {
        axios.get('/getTime').then(
            response => {
                //console.log(response)
                this.setState({
                    time:response.data.time
                })
            }
        )
    }

    render() {
        const time = this.state.time ? (
            <Timer time={this.state.time}/>

        ) : (
            <p>Loading</p>            
        )
        
        return (
            <BrowserRouter>
                <div>
                    {/* {time} */}
                    <Switch>
                        <Route exact path='/Coding/:pk' component={AppCoding} />
                        <Route path='/Questions' component={Questions} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppQuestion