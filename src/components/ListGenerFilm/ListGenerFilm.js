import React from 'react';
import './ListGenerFilm.css';
import ComponentFilm from '../ComponentFilm/ComponentFilm';

class ListGenerFilm extends React.Component {
    constructor(props) {
        super(props);
        this.showPopularFilms = this.showPopularFilms.bind(this);
        this.checkScroll = this.checkScroll.bind(this);
    }

    showPopularFilms() {
        let filmsArr;

        if (this.props.GenersR.generList) {
            filmsArr = this.props.GenersR.generList.map(i =>
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
        if (!this.props.GenersR.loading && this.props.GenersR.generList && (scrollHeight - myScroll < 1600)) {
            this.props.MoreListGenersAction(this.props.match.params.name, this.props.GenersR.nextPage)
        }
    }

    componentDidMount() {
        this.props.listGenersAction(this.props.match.params.name);
        window.addEventListener('scroll', this.checkScroll);
        window.scrollTo(0, 0)

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

    render() {
        console.log(this.props)
        return(
            <div className='container'>
                <div className='AppContent'>
                    <div className='popularFilmsComponent'>
                        <h2>{this.props.location.state}</h2>
                        <div className='popularFilmsContainer' onScroll={this.checkScroll}>
                            {this.showPopularFilms()}
                            {/* <button onClick={this.checkScroll}>aaaaa</button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListGenerFilm;