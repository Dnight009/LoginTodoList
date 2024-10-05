import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = () => {
    const [username, setUsername] = useState('');
    const [userpass, setPassword] = useState('');

    const handleRegister = async () => {
        if (!username || !userpass) {
          Alert.alert('Vui lòng nhập email và mật khẩu');
          return;
        }
      
        try {          
          await auth().createUserWithEmailAndPassword(username, userpass);
          Alert.alert('Đăng ký thành công!');
          console.log("Registering with: ", username, userpass); 
        } catch (error) {
          console.log("Registration Error: ", error); // Log the error for debugging
          // Handle registration errors
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email này đã được sử dụng!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('Email không hợp lệ!');
          } else {
            Alert.alert('Lỗi đăng ký!', error.message);
          }
        }
      };
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Ký</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={userpass}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button title="Đăng ký" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default Register;
