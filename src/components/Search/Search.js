import React from 'react';
import { DelayInput } from 'react-delay-input';
import ComponentFilm from '../ComponentFilm/ComponentFilm';
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.showSearch = this.showSearch.bind(this);
        this.checkScroll = this.checkScroll.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
    }

    showSearch() {
        let filmsArr;

        if (this.props.SearchR.searchList) {
            filmsArr = this.props.SearchR.searchList.map(i =>
                <ComponentFilm info={i} />
            );
        } else {
            filmsArr = <div>Loading</div>
        }
        return filmsArr;
    }

    checkScroll() {
        if(this.props.SearchR.nextPage <= this.props.SearchR.countPages) {
            let scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            let myScroll = window.pageYOffset
            if (!this.props.SearchR.loading && this.props.SearchR.searchList && (scrollHeight - myScroll < 1600)) {
                this.props.MoreSearchFilmAction(this.state.value, this.props.SearchR.nextPage)
            }
        }
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

    setSearchValue(searchValue) {
        this.setState({
            value: searchValue
        })

        this.props.SearchFilmAction(searchValue)

    }

    render() {
        console.log(this.props)
        return (
            <div className='searchContainer'>
                <h1>Search by movie name</h1>
                <div className='search'>
                    <div>
                        <DelayInput
                            placeholder='Enter movie name'
                            minLength={1}
                            delayTimeout={1000}
                            onChange={e => this.setSearchValue(e.target.value)} />
                    </div>
                </div>
                {(!this.props.SearchR.searchList || this.props.SearchR.searchList.length === 0) && <div className='space'>
                    <p>Don`t have any results</p>
                </div>}
                {this.props.SearchR.searchList && this.props.SearchR.searchList.length > 0 && <div className='container'>
                    <div className='AppContent'>
                        <div className='popularFilmsComponent'>
                            <h2>Search Results</h2>
                            <div className='popularFilmsContainer' onScroll={this.checkScroll}>
                                {this.showSearch()}
                            </div>
                        </div>
                    </div>
                </div>

                }
                
            </div>
        );
    }

}

export default Search;