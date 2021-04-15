import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
// import Counter from './components/Counter';
// import FetchData from './components/FetchData';
import AppHome from './components/pages/AppStart'

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/home' component={Home} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
        <Route path='/' component={AppHome} />
    </Layout>
);
