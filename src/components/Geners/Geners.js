import React from 'react';
import './Geners.css';
import { Link } from "react-router-dom";

class Geners extends React.Component {
    constructor(props) {
        super(props);
        this.showGeners = this.showGeners.bind(this);
    }

    showGeners() {
        let filmsArr;
        if (this.props.GenersR.geners) {
            filmsArr = this.props.GenersR.geners.map(i =>
                <div className='GenerItem'>
                    <Link
                        to={{ pathname: `/themoviedb/category/${i.id}`}}> 
                        {i.name}
                    </Link>
                </div>

            );
        } else {
            filmsArr = <div>Loading</div>
        }
        return filmsArr;
    }



    componentDidMount() {
        this.props.GenersAction()
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.checkScroll);
    // }

    render() {
        console.log(this.props)
        return (

            <div className='container'>
                <div className='AppContent'>
                    <div className='popularFilmsComponent'>
                        <h2>Geners</h2>
                        <div className='GenerContainer'>
                            {this.showGeners()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Geners;
