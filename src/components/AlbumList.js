import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    state = { albums: [] };

  
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //return this.state.albums.map(album => <Text>Test</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>YES</Text>
            </View>
        );
    }
}

export default AlbumList;

