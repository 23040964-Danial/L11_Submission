import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        if (!username || !email || !phone) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        const newUser = { username, email, phone };

        fetch('https://46cd9aa176be434ab0857c319dbaaa7a.api.mockbin.io/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '46cd9aa176be434ab0857c319dbaaa7a'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                Alert.alert('Success', 'Registration successful!');
                navigation.navigate('Home');
            })
            .catch(error => {
                Alert.alert('Error', 'Registration failed. Please try again.');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register for Online Competition</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default Register;
