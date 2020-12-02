// import React from 'react';
// import './FilmInfo.css'

// class FilmInfo extends React.Component {

//     constructor(props) {
//         super(props);
//         this.showFilmInfo = this.showFilmInfo.bind(this);
//         this.showGeners = this.showGeners.bind(this);
//         this.getTrailer = this.getTrailer.bind(this);
//     }

//     componentDidMount() {
//         this.props.FilmTrailerAction(this.props.match.params.id);
//         this.props.FilmInfoAction(this.props.match.params.id);
//         window.scrollTo(0, 0)
//     }

//     showGeners() {
//         if (this.props.ReducerFilmInfo.currnetFilm) {
//             const Geners = this.props.ReducerFilmInfo.currnetFilm.genres.map(i => <span className='geners'>
//                 #{i.name}
//             </span>)
//             return Geners
//         }
//     }

//     getTrailer() {
//         if (this.props.ReducerFilmInfo.trailer && this.props.ReducerFilmInfo.trailer[0]) {
//             const firstTrailer = this.props.ReducerFilmInfo.trailer[0].key
//             return firstTrailer;
//         }
//     }

//     showFilmInfo() {
//         if (this.props.ReducerFilmInfo.currnetFilm) {

//             const film = this.props.ReducerFilmInfo.currnetFilm;
//             const relaseDate = `${film.release_date[0]}${film.release_date[1]}${film.release_date[2]}${film.release_date[3]}`;

//             // const myBack = {
//             //     backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}})`,
//             //     backgroundSize: `cover`,
//             //     backgroundPosition: `center`,
//             //     backgroundRepeat: `no-repeat`,
//             //     opacity: `0.4`,
//             //     height: `1050px`,
//             //     position: `relative`,
//             // }

//             return (
//                 <>
//                     {/* <div style={myBack}></div> */}
//                     <div className='content'>
//                         <div className='aboutFilm'>
//                             <div className='mainInfo'>
//                                 <h3>{film.title} (<span>{relaseDate}</span>)</h3>
//                                 <h4>{film.tagline}</h4>
//                                 {/* <div className='generList'>
//                                 {this.showGeners()}
//                             </div> */}
//                                 <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt='' />
//                                 {/* <p>{film.overview}</p> */}
//                             </div>
//                             <div class="videowrap">
//                                 <div class="videoblock">
//                                     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.getTrailer()}`}></iframe>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )
//         }


//         render() {
//             console.log(this.props);
//             // {this.getTrailer()}
//             return (

//                 <div className='filmInfoContainer'>
//                     {this.getTrailer()}
//                     {this.showFilmInfo()}
//                 </div>
//             );
//         }


//     }

// export default FilmInfo;

import React from 'react';
import './FilmInfo.css';

class FilmInfo extends React.Component {
    constructor(props) {
        super(props);
        this.showFilmInfo = this.showFilmInfo.bind(this);
        // this.showGeners = this.showGeners.bind(this);
        this.getTrailer = this.getTrailer.bind(this);
        this.checkFavoriteFilm = this.checkFavoriteFilm.bind(this);
    }

    componentDidMount() {
        this.props.FilmTrailerAction(this.props.match.params.id);

        this.props.FilmInfoAction(this.props.match.params.id);
        this.getTrailer()

        window.scrollTo(0, 0)

        this.checkFavoriteFilm()
    }

    componentDidUpdate() {
        this.checkFavoriteFilm()

    }

    getTrailer() {
        if (this.props.ReducerFilmInfo.trailer && this.props.ReducerFilmInfo.trailer[0]) {
            const firstTrailer = this.props.ReducerFilmInfo.trailer[0].key
            return firstTrailer;
        }
    }

    checkFavoriteFilm() {
        if(this.props.FavoriteR.favoriteArr && this.props.FavoriteR.favoriteArr.length > 0) {
            this.props.FavoriteR.favoriteArr.filter(function(i) {
                if(i.id === this.props.match.params.id) {
                    return false;
                }
            })
        }
    }

    showFilmInfo() {
        if (this.props.ReducerFilmInfo.currnetFilm) {
            const film = this.props.ReducerFilmInfo.currnetFilm;
            const relaseDate = `${film.release_date[0]}${film.release_date[1]}${film.release_date[2]}${film.release_date[3]}`;

            return (
                <>
                    <div className='content'>
                        <div className='aboutFilm'>
                            <div className='mainInfo'>
                                <h3>{film.title} (<span>{relaseDate}</span>)</h3>
                                <h4>{film.tagline}</h4>
                                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt='' />
                                {/* <div>
                                    <button onClick={() => this.props.AddFavoriteFilmAction(this.props.ReducerFilmInfo.currnetFilm)}>Favorite</button>
                                </div> */}
                            </div>
                            <div class="videowrap">
                                <div class="videoblock">
                                    
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.getTrailer()}`}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    render() {
        console.log(this.props);
        // {this.getTrailer()}
        return (

            <div className='filmInfoContainer'>
                {this.showFilmInfo()}
            </div>
        );
    }

}

export default FilmInfo;
