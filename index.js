/**
 * @format
 */

import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/header';    
import { name as appName } from './app.json';
import AlbumList from './src/components/AlbumList';  

const App = () => {
   return (
    <View>
        <Header headerText={'Album'} />
        <AlbumList/>
    </View>
   );
};  


AppRegistry.registerComponent(appName, () => App);
