// App.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <KeyboardAvoidingWrapper>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
                    <TextInput
                        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <TextInput
                        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
                    <TextInput
                        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <TextInput
                        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});