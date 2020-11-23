import React from 'react';

class FilmInfo extends React.Component {

    componentDidMount() {
        this.props.FilmInfoAction(this.props.match.params.id);
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <button>aaaaaaaaaaa</button>
                <div>aaaaaaaaaaa</div>
                <button>aaaaaaaaaaa</button>
                <div>aaaaaaaaaaa</div>
                <button>{this.props.match.params.id}</button>
            </div>
        );
    }
}

export default FilmInfo;
