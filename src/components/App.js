import React from 'react';
import SearchBar from './searchbar';
import ImageList from './ImageList'
import axios from 'axios' ;


class  App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) =>{
        const response =  await axios.get('https://api.unsplash.com/search/photos',{
        params:{ query: term},
        headers:{
            Authorization: "Client-ID jLVQlJHvZ0gn7H8XXoklSmx2gQ_j3wWorTzucbtLnKA"
        }
        })

        this.setState({images : response.data.results})
    }

    render(){
        return(
            <div>
                <SearchBar userSubmit={this.onSearchSubmit} />
                <span>Found:{this.state.images.length}images</span>
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }    
}

export default App ;
