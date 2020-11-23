import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import ListPopularFilms from '../../containers/ContainerPopularFilms';
// import ComponentFilmInfo from '../FilmInfo/FilmInfo';
import FilmInfo from '../../containers/FilmInfoContainer';
import Footer from '../Footer/Footer';


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
                        <Redirect exact from="/" to="/themoviedb" />
                        <Redirect exact from="/themoviedb" to="/themoviedb/home" />
                        <Route exact path='/themoviedb/home' component={ListPopularFilms} />
                        <Route exact path='/themoviedb/top250' component={App2} />
                        <Route exact path='/themoviedb/rated' component={App3} />
                        <Route exact path='/themoviedb/home/:id' component={FilmInfo} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
