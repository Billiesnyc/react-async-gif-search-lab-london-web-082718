import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount(){
       this.fetchGifs('dolphins')
    }

    render(){
        return(
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGifs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => this.setState({gifs: data}))
    }
}

export default GifListContainer;