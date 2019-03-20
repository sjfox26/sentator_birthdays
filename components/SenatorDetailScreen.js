import React from 'react';
import { Text, View } from 'react-native';


const SenatorDetailScreen = (props) => {
    return (
        <View>
            <Text>{props.lastname}</Text>
            <Text>{props.birthday}</Text>
        </View>
    );
};

export default SenatorDetailScreen;