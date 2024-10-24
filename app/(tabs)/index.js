import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Movie = ({title, year})=> {
    return (
        <View>
            <Text>
                {title} {year}
            </Text>
            <Icon name="inbox" size={30} color="#B23B23" />
            <Icon name="heart" size={30} color="#B23B23" />
            <Icon name="skull" size={20} color="#B23B23" />

        </View>
    )
};
//fjdsfjhdhsk

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text>These are my modules this semester:</Text>
                <Movie title="CSC 309" year="2021" />
            </View>
        )
    }
}

export default ModuleInfo;