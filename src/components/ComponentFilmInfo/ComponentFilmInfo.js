import React from 'react';

class ComponentFilmInfo extends React.Component {

    
    render() {
        return(
            <div>
                <p>aaaaaaaaaaa</p>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default ComponentFilmInfo;
