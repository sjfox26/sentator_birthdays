import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Linking,
    //ScrollView
} from 'react-native';
import axios from 'axios';
import Button from './Button';
//import SenatorDetailScreen from './SenatorDetailScreen';

class SenatorListScreen extends Component {
    state = { senators: [], loading: true };

    componentDidMount() {
        axios.get('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
            .then(response => this.setState({ senators: response.data.objects, loading: false }));
    }

    /*renderSenators() {
        return this.state.senators.map(senator =>
            <SenatorDetailScreen key={senator.person.name}
                                 lastname={senator.person.lastname}
                                 birthday={senator.person.birthday}
                                 url={senator.person.link} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderSenators()}
            </ScrollView>
        );
    }*/

    render() {

        if (this.state.loading) {
            return (<Text>Loading your Senators...</Text>);
        }

        return (
            <View style={styles.container} >
                <Text style={styles.h2text}>
                    U.S. Senators...
                </Text>
                <FlatList
                    data={this.state.senators}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <View style={styles.flatview} onPress={() => console.log("hi")}>
                            <Text style={styles.name}>{item.person.lastname}</Text>
                            <Text style={styles.bday}>{item.person.birthday}</Text>
                            <Button onPress={() => Linking.openURL(item.person.link)}>
                                Visit website!
                            </Button>
                        </View>
                    }
                    keyExtractor={item => item.person.birthday}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: "100%"
    },
    h2text: {
        marginTop: 10,
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        flex: 1,
        fontSize: 18
    },
    bday: {
        flex: 1,
        color: 'red'
    }

});

export default SenatorListScreen;