import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import axios from 'axios';
//import SenatorDetailScreen from './SenatorDetailScreen';

class SenatorListScreen extends Component {
    state = { senators: [], loading: true };

    componentDidMount() {
        axios.get('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
            .then(response => this.setState({ senators: response.data.objects, loading: false }));
    }

    /*renderSenators() {
        return this.state.senators.map(senator =>
            <SenatorDetailScreen key={senator.person.name} lastname={senator.person.lastname} birthday={senator.person.birthday} />
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
                    U.S. Senators....
                </Text>
                <FlatList
                    data={this.state.senators}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <View style={styles.flatview}>
                            <Text style={styles.name}>{item.person.lastname}</Text>
                            <Text style={styles.bday}>{item.person.birthday}</Text>
                        </View>
                    }
                    keyExtractor={item => item.person.lastname}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontSize: 18
    },
    bday: {
        color: 'red'
    }

});

export default SenatorListScreen;