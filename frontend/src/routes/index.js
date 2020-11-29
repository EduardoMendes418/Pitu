import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//ROTAS PAGES
import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPAge from '../pages/NotFoundPage';


//PITU.TK/ -> NAMEPAGE
//PITU.TK/:CODE -> REDIRECTPAGE
//PITU.TK/:CODE/STATS -> STATSPAGE

function Routes(){
return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:code" component={RedirectPage} />
            <Route exact path="/:code/stats" component={StatsPage}/>
            <Route exact pach="/*" component={NotFoundPAge} />
        </Switch>
    </BrowserRouter>
)
}

export default Routes