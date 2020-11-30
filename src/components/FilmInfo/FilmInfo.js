import React from 'react';
import './FilmInfo.css'

class FilmInfo extends React.Component {

    constructor(props) {
        super(props);
        this.showFilmInfo = this.showFilmInfo.bind(this);
        this.showGeners = this.showGeners.bind(this);
        this.getTrailer = this.getTrailer.bind(this);
    }

    componentDidMount() {
        this.props.FilmInfoAction(this.props.match.params.id);
        this.props.FilmTrailerAction(this.props.match.params.id);
        window.scrollTo(0, 0)
    }

    showGeners() {
        if (this.props.ReducerFilmInfo.currnetFilm) {
            const Geners = this.props.ReducerFilmInfo.currnetFilm.genres.map(i => <span className='geners'>
                #{i.name}
            </span>)
            return Geners
        }
    }

    getTrailer() {
        if(this.props.ReducerFilmInfo.trailer) {
            const firstTrailer = this.props.ReducerFilmInfo.trailer[this.props.ReducerFilmInfo.trailer.length - 1].key
            return firstTrailer;
        }
    }

    showFilmInfo() {
        if (this.props.ReducerFilmInfo.currnetFilm) {

            const film = this.props.ReducerFilmInfo.currnetFilm;
            const relaseDate = `${film.release_date[0]}${film.release_date[1]}${film.release_date[2]}${film.release_date[3]}`;

            const myBack = {
                backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${film.backdrop_path}`})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                opacity: `0.4`,
                height: `1050px`,
                position: `relative`,
            }

            return <>
                {/* <div style={myBack}></div> */}
                <div className='content'>
                    <div className='aboutFilm'>
                        <div className='mainInfo'>
                            <h3>{film.title} (<span>{relaseDate}</span>)</h3>
                            <h4>{film.tagline}</h4>
                            {/* <div className='generList'>
                                {this.showGeners()}
                            </div> */}
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt='' />
                            {/* <p>{film.overview}</p> */}
                        </div>
                        <div class="videowrap">
                            <div class="videoblock">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.getTrailer()}`}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    }

    render() {
        console.log(this.props);
        {this.getTrailer()}
        return (
            <div className='filmInfoContainer'>
                {this.showFilmInfo()}
            </div>
        );
    }
}

export default FilmInfo;
