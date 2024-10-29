import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Movie from './components/Movie';
import Boat from './components/Boat';


class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text>These are my modules this semester:</Text>
                <Movie title="CSC 309" year="2021" />

                <Boat title="CSC 309" year="2021" />
                <Image source={require('./img/icon.png')} style={{width:400, height:500}}/>

            </View>
        )
    }
}

export default ModuleInfo;