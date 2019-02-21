import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Register/Register'
import AppMain from './AppMain';
import Instruction from './Instruction/Intruction'
import Waiting from './Waiting Page/Waiting'

class App extends React.Component {

    render() { 
        return (
            <BrowserRouter>
                <div >
                    <Switch>
                        <Route exact path='/instruction' component={Instruction}/>
                        <Route exact path='/' component={Waiting}/>
                        <Route path='/player/' component={Register}/>
                        <Route path='/' component={AppMain} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default App