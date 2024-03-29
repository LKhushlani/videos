import React from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    onTermSubmit = (term) => {
        console.log(term);
        youtube.get('/search', {
            params : {
                q: term,
            },
        });

    };

    render() {

        return (
        <div className='ui container'>
            <SearchBar onTermSubmit={this.onTermSubmit}/>
        </div>
        );
    }
}

export default App;