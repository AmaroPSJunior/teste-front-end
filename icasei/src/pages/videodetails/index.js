import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API_KEY from '../../services/API_KEY';
import api from '../../services/api.js';

import './styles.scss';

export default class VideoDetails extends Component {
    state = {
        itemsPorPage: 3,
        itemList: 0,
        palavra: 'livros',
        videos: [],
        videoInfo:[],
        pageTotal: 1,
    }

    componentDidMount(){
        this.loadVideoDetails();
    }

    loadVideoDetails = async () => {

        const params = {
            key: API_KEY,
            part: 'id,snippet',
            q: this.state.palavra,
            maxResults: this.itemsPorPage
        };
        
        const response = await api.get('/search', { params });
     
        const { pageInfo, items, ...videoInfo} = response.data;

        this.setState({ 
            videos: response.data.items, 
            videoInfo, 
            itemList: pageInfo.resultsPerPage
        })   

        console.log(response);
    };
    
    render(){
        const { videos } = this.state;
        const id = 'teste'; 
        
        return( 
            <div className='VideoDetails'>
                <h1>VideoDetails</h1>
                <Link href={`videodetails/2`}>link</Link>
            </div>
        )
        

            
    }
}
