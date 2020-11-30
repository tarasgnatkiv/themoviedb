import React from 'react';
import './ListGenerFilm.css'

class ListGenerFilm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return(
            <div className='List'>
                <button>{this.props.match.params.name}</button>
            </div>
        );
    }
}

export default ListGenerFilm;