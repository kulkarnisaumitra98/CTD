import React from 'react'
import Main from './Instruction/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Register/Register'
import Waiting from './Waiting Page/waiting'
import AppMain from './AppMain';
// import AppCoding from './CodingPage/AppCoding';
// import Submission from './Submission/Submission'
// import Timer from './Timer'
// import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        //console.log("I am in App")
    }

    render() { 
        return (
            <BrowserRouter>
                <div >
                    <Switch>
                        <Route exact path='/instruction' component={Main}/>
                        <Route exact path='/' component={Waiting}/>
                        <Route path='/player/' component={Register}/>
                        <Route path='/' component={AppMain} />
                        {/* <Route exact path='/Submissions/:pk' component={Submission}/> */}
                        {/* <Route path='/Coding/' component={AppCoding}/> */}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default App