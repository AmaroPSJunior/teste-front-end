import React, { Component } from 'react';
import Pesquisar from '../../components/pesquisar/index.js';
import api from '../../services/api.js';
import API_KEY from '../../services/API_KEY';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import { Certificate } from 'crypto';
import { red } from '@material-ui/core/colors';

export default class Main extends Component {
    state = {
        itemsPorPage: 3,
        itemList: 0,
        palavra: 'livros',
        videos: [],
        videoInfo:[],
        pageTotal: 1,
    }

    
    componentDidMount(){
        this.loadVideos(this.state.itemsPorPage);
    }

    loadVideos = async () => {

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

        console.log('searchParams', response);
    };

    nextResult = () => {
        
        const { itemsPorPage, itemList } = this.state;

        this.loadVideos(itemList + itemsPorPage);   
    };


    
     
    render(){
        const { videos } = this.state;

        return( 
            <div className='video-list'>
                <Pesquisar />
                { videos.map(video => (
                    <div>
                        <img src={video.snippet.thumbnails.medium.url}/>
                        
                        <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image= {video.snippet.thumbnails.high.url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            <h3>{video.snippet.title}</h3>
                            </Typography>

                            <Typography gutterBottom variant="h5" component="h2">
                            <p>{video.snippet.channelTitle}</p>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>descrição do video descrição do video descrição do video </p>
                            </Typography>]

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button className='btn' target='blank' href={`https://www.youtube.com/watch?v=video.id.videoId`}>
                            Detalhes do video
                        </Button>
                        
                        </CardActions>
                        </Card>                 
                    </div>
               ))}

                <footer>
                    <Button onClick={this.nextResult} variant="contained" color="primary">mais</Button>
                </footer>
            </div>
        )
    }
}

const classes = makeStyles({

    pesquisar: {
        display: flexbox,
        justifyContent: Certificate,
        alignItems: Certificate,
        backgroundColor: red,
        color: red,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});