import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import ContainerPopularFilms from '../../containers/ContainerPopularFilms';
import Footer from '../Footer/Footer';
import ComponentFilmInfo from '../ComponentFilmInfo/ComponentFilmInfo'

import App1 from '../1'
import App2 from '../2'
import App3 from '../3'

function App() {
    return (
        <div className="App">
            <Header />
            <div className='container'>
                <div className='AppContent'>
                    <Switch>
                        <Redirect exact from="/" to="/themoviedb/home" />
                        <Redirect exact from="/themoviedb" to="/themoviedb/home" />
                        <Route exact path='/themoviedb/home' component={ContainerPopularFilms} />
                        <Route exact path='/themoviedb/top250' component={App2} />
                        <Route exact path='/themoviedb/rated' component={App3} />
                        {/* <Route exact path='/home/:id' component={ComponentFilmInfo} /> */}
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
