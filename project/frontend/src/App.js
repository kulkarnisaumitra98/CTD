import React from 'react'
import Main from './Instruction/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Register/Register'
import AppQuestion from './Question/AppQuestion'
import Waiting from './Waiting Page/waiting'
import AppCoding from './CodingPage/AppCoding';
import Submission from './Submission/Submission'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <Switch>
                        <Route exact path='/Questions' component={AppQuestion} />
                        <Route exact path='/instruction' component={Main}/>
                        <Route exact path='/' component={Waiting}/>
                        <Route exact path='/Submissions/:pk' component={Submission}/>
                        <Route path='/player/' component={Register}/>
                        <Route path='/Coding/' component={AppCoding}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default App