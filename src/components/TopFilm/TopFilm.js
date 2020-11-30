import React from 'react';
import './TopFilm.css';
import { Link } from "react-router-dom";


class TopFilm extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
                <Link to={{ pathname: `/themoviedb/top250/${this.props.info.id}`, id: this.props.info.id}} className='filmItem'>
                    <img src={`https://image.tmdb.org/t/p/original/${this.props.info.poster_path}`} />
                    <p>{this.props.info.title}</p>
                    <span>{this.props.info.vote_average}</span>
                </Link>
        );
    }
}

export default TopFilm;