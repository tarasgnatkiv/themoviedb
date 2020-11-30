import React from 'react';
import TopFilm from '../TopFilm/TopFilm';
import './ListTopFilm.css';


class ListTopFilm extends React.Component {
    constructor(props) {
        super(props);
        this.showTopFilms = this.showTopFilms.bind(this);
        this.checkScroll = this.checkScroll.bind(this);
    }

    showTopFilms() {
        let filmsArr;

        if (this.props.TopFilmsR.topFilmsArray) {
            filmsArr = this.props.TopFilmsR.topFilmsArray.map(i =>
                <TopFilm info={i} />
                // <button>{i.id}</button>
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
        if (!this.props.TopFilmsR.loading && this.props.TopFilmsR.topFilmsArray && (scrollHeight - myScroll < 1600)) {
            this.props.MoreTopFilmsAction(this.props.TopFilmsR.nextPage)
        }
    }

    componentDidMount() {
        this.props.TopFilmsAction()
        window.addEventListener('scroll', this.checkScroll);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

    render() {
        console.log(this.props)
        return (
            
            <div className='container'>
                <div className='AppContent'>
                    <div className='popularFilmsComponent'>
                        <h2>Top movie for all time</h2>
                        <div className='popularFilmsContainer' onScroll={this.checkScroll}>
                            {this.showTopFilms()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default ListTopFilm;
