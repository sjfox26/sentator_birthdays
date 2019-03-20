import React from 'react';
import { Text, View, Linking } from 'react-native';
import Button from './Button';


const SenatorDetailScreen = ({ url, lastname, birthday }) => {


    return (
        <View>
            <Text>{lastname}</Text>
            <Text>{birthday}</Text>

            <Button onPress={() => Linking.openURL(url)}>
                Visit site!
            </Button>
        </View>
    );
};

export default SenatorDetailScreen;