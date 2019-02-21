import React from 'react'
import Player1 from './Player1'
import Player2 from './Player2'
import Username from './Username'
import './player.css'
import { BrowserRouter,Route, Switch, withRouter } from 'react-router-dom'
import App from '../App';

class Page extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <div>
                    <Switch>
                        <Route exact path='/player/2' component={Player2} />
                        <Route exact path='/player/1' component={Player1} />
                        <Route exact path='/player/username' component={Username} />
                        <Route path='/'component={App}/>
                    </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default withRouter(Page)

