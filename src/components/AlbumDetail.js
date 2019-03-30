import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
   
    const { title, artist, thumbnail_image, image } = album;
    const { thumbnailContainerStyle, headerTextStyle, artworkImageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={styles.imageStyle} source={{ uri: thumbnail_image }} />
                </View>

                <View style={styles.detailStyles} >
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>

            <CardSection>
                <Image style={artworkImageStyle} source={{ uri: image }} />
            </CardSection>
            
        </Card>

    );
};

const styles = {
    imageStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },

    headerTextStyle: {
        fontSize: 18
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    detailStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    artworkImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

