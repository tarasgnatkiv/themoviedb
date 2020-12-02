import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import ListPopularFilms from '../../containers/ContainerPopularFilms';
import FilmInfo from '../../containers/FilmInfoContainer';
import Footer from '../Footer/Footer';
import TopFilmsC from '../../containers/TopFilmsC';
import GenersCont from '../../containers/GenersCont';
import ListGenerCont from '../../containers/ListGenerCont';
import SearchCont from '../../containers/SearchCont';
// import Favorite from '../Favorite/Favorite'


function App() {
    return (
        <div className="App">
            <Header />
            {/* <div className='container'> */}
                {/* <div className='AppContent'> */}
                    <Switch>
                        <Redirect exact from="/" to="/themoviedb" />
                        <Redirect exact from="/themoviedb" to="/themoviedb/home" />
                        <Route exact path='/themoviedb/home' component={ListPopularFilms} />
                        <Route exact path='/themoviedb/home/:id' component={FilmInfo} />
                        <Route exact path='/themoviedb/top250' component={TopFilmsC} />
                        <Route exact path='/themoviedb/top250/:id' component={FilmInfo} />
                        <Route exact path='/themoviedb/category' component={GenersCont} />
                        <Route exact path='/themoviedb/category/:name' component={ListGenerCont} />
                        <Route exact path='/themoviedb/search' component={SearchCont} />
                        {/* <Route exact path='/themoviedb/favorite' component={Favorite} /> */}


                    </Switch>
                {/* </div> */}
            {/* </div> */}
            <Footer />
        </div>
    );
}

export default App;
