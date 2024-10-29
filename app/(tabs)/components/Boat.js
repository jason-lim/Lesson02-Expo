import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Boat = ({title, year})=> {
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

export default Boat;