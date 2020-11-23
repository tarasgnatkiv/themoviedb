import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

import logoReact from '../../img/logoReact.svg';
import search from '../../img/Header/search.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
        if (!this.state.clicked) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }

    render() {
        return (
            <>
                <header className='header'>
                    <div className='container'>
                        <div className='headerBody'>
                            <div className='headerNav'>
                                <div className='headerLogo'>
                                    <img src={logoReact} className='App-logo' alt='logo' />
                                    <h1>React <span>Movie</span></h1>
                                </div>
                                <nav className={this.state.clicked ? 'headerMenu active' : 'headerMenu'}>
                                    <ul className='headerList'>
                                        <li>
                                            <Link to={'/themoviedb/home'} className="headerLink" onClick={this.handleClick}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={'/themoviedb/top250'} className="headerLink" onClick={this.handleClick}>Top 250</Link>
                                        </li>
                                        <li>
                                            <Link to={'/themoviedb/category'} className="headerLink" onClick={this.handleClick}>Category</Link>
                                        </li>
                                        <li>
                                            <Link to={'/themoviedb/search'} className="headerLink" onClick={this.handleClick}>
                                                <img src={search} className='searchImg'/>
                                                Search
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div
                                className={this.state.clicked ? 'headerBurger active' : 'headerBurger'}
                                onClick={this.handleClick}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;