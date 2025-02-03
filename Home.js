import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listStyle: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://46cd9aa176be434ab0857c319dbaaa7a.api.mockbin.io/')
            .then(response => response.json())
            .then((myJson) => {
                setMyData(myJson);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listStyle}>
                <Text>{item.username}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.buttonContainer}>
                <Button title='Add Item' onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })} />
                <Button title='Register' onPress={() => navigation.navigate("Register")} />
            </View>
            <FlatList
                data={myData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;
