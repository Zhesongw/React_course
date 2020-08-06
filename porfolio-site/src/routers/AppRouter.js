import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/Home.js';
import Portfolio from '../components/Portfolio.js';
import PortfolioList from '../components/PortfolioList.js';
import ContactPage from '../components/ContactPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Header from '../components/Header.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}  />
                <Route path="/portfolio" component={PortfolioList} exact={true}/>
                <Route path="/portfolio/:id" component={Portfolio}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter