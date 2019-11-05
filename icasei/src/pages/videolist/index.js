import React, { Component } from 'react';
import api from '../../services/api.js';
import './styles.css';

export default class Main extends Component {
    state = {
        videos: [],
        itemsPorPage: 4,
        palavra: 'livros',
        videoInfo:[],
        pageTotal: 1,
    }
    

    componentDidMount(){
        this.loadVideos();
    }

    loadVideos = async () => {

        const API_KEY = 'AIzaSyCSPt7RrrXphB12hLWE5TChG0AgWtE1GRg';
        const params = {
            key: API_KEY,
            part: 'id,snippet',
            q: this.state.palavra,
            maxResults: this.state.itemsPorPage
        };
        
        const response = await api.get('/search', { params });
        const { pageInfo, ...videoInfo} = response.data;
   
        const pageTotal = pageInfo.totalResults / pageInfo.resultsPerPage
        console.log('pageTotal', pageTotal);

        this.setState({ videos: response.data.items, videoInfo })   





        console.log('searchParams', response);
        console.log('pageInfo', pageInfo);
        console.log('videoInfo', videoInfo);
    };

    prevPage = () => {}
    nextPage = () => {
        const { itemsPage, videoInfo } = this.state;

        if (itemsPage === videoInfo.resultsPerPage) {
            console.log('true');
        } else {
            console.log('false');
        }

        const { itemsPorPage } = this.state;

        itemsPorPage = itemsPorPage + 10;

        console.log(itemsPorPage);
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
                        <button onClick={this.prevPage}>Anterior</button>
                        <button onClick={this.nextPage}>Próxima</button>
                    </div>
                </footer>
            </div>
        )
        
    }
}
