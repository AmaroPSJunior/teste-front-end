import React, { Component } from 'react';
import api from '../../services/api.js';
import './styles.css';

export default class Main extends Component {
    state = {
        itemsPorPage: 2,
        itemList: 0,
        palavra: 'livros',
        videos: [],
        videoInfo:[],
        pageTotal: 1,
    }

    componentDidMount(){
        this.loadVideos(this.state.itemsPorPage);
    }

    loadVideos = async (itemsPorPage) => {
        const API_KEY = 'AIzaSyCSPt7RrrXphB12hLWE5TChG0AgWtE1GRg';
        const params = {
            key: API_KEY,
            part: 'id,snippet',
            q: this.state.palavra,
            maxResults: itemsPorPage
        };
        
        const response = await api.get('/search', { params });
     
        const { pageInfo, items, ...videoInfo} = response.data;

        this.setState({ 
            videos: response.data.items, 
            videoInfo, 
            itemList: pageInfo.resultsPerPage
        })   

        console.log('searchParams', response);
        console.log('pageInfo', pageInfo);
        console.log('videoInfo', videoInfo);
    };

    nextResult = () => {
        
        const { itemsPorPage, itemList } = this.state;

        this.loadVideos(itemList + itemsPorPage);   
    }
    
    render(){
        const { videos } = this.state;

        return( 
            <div className='video-list'>
                { videos.map(video => (
                    <article>
                        <h5>{video.snippet.title}</h5>
                        <img src={video.snippet.thumbnails.medium.url}/>
                    </article>
                )) }

                <footer>
                    <div className='actions'>
                        <button onClick={this.nextResult}>Próxima</button>
                    </div>
                </footer>
            </div>
        )
        
    }
}
