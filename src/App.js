import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import WorldChampionsList from './components/worldChampionsList/WorldChampionsList'
import YearsList from './components/yearsList/YearsList'
import Header from './components/header/Header'
import history from './history';

const App = () => {
    return (
        <div className="mainContainer">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={YearsList} />
                        <Route path='/worldchamps' exact component={WorldChampionsList} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;