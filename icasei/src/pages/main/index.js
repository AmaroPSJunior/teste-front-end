import React, { Component } from 'react';
import api from '../../services/api.js';

export default class Main extends Component {
    state = {
        videos: [],
        obj: null
    }

    componentDidMount(){
        this.loadVideos();
    }

    loadVideos = async () => {

        const API_KEY = 'AIzaSyCSPt7RrrXphB12hLWE5TChG0AgWtE1GRg';
        const params = {
            key: API_KEY,
            part: 'id,snippet',
            q: 'livros',
            maxResults: 10
        };
        const searchParams = `?key=${params.key}&part=${params.part}&maxResults=${params.maxResults}&q=${params.q}`;
        
        const response = await api.get(`${searchParams}`);

        console.log('searchParams', response);
        this.setState({ videos: response.data.items })   
    };

    render(){
        const { videos } = this.state;

        return( 
            <div className='video-list'>
                { videos.map(video => (
                    <div>
                        <h5>{video.snippet.title}</h5>
                        <img src={video.snippet.thumbnails.default.url}/>
                        <hr />
                    </div>
                )) }
            </div>
        )
    }
}
