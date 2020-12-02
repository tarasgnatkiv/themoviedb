import React from 'react';
import ComponentFilm from '../ComponentFilm/ComponentFilm';
import './ListPopularFilms.css';


class ListPopularFilms extends React.Component {
    constructor(props) {
        super(props);
        this.showPopularFilms = this.showPopularFilms.bind(this);
        this.checkScroll = this.checkScroll.bind(this);
    }

    showPopularFilms() {
        let filmsArr;

        if (this.props.ReducerPopularFilms.filmsArray) {
            filmsArr = this.props.ReducerPopularFilms.filmsArray.map(i =>
                <ComponentFilm info={i} />
            );
        } else {
            filmsArr = <div>Loading</div>
        }
        return filmsArr;
    }

    checkScroll() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let myScroll = window.pageYOffset
        if (!this.props.ReducerPopularFilms.loading && this.props.ReducerPopularFilms.filmsArray && (scrollHeight - myScroll < 1600)) {
            this.props.MorePopularFilmsAction(this.props.ReducerPopularFilms.nextPage)
        }
    }

    componentDidMount() {
        this.props.PopularFilmsAction()
        window.addEventListener('scroll', this.checkScroll);
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

    render() {
        return (

            <div className='container'>
                <div className='AppContent'>
                    <div className='popularFilmsComponent'>
                        <h2>Popular movie right now</h2>
                        <div className='popularFilmsContainer' onScroll={this.checkScroll}>
                            {this.showPopularFilms()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default ListPopularFilms;
