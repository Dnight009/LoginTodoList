import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Button, Alert, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [userpass, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Firebase authentication to sign in
      await auth().signInWithEmailAndPassword(username, userpass);
      Alert.alert('Thông báo', 'Đăng nhập thành công');
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Lỗi', 'Tài khoản không tồn tại.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Lỗi', 'Mật khẩu không chính xác.');
      } else {
        Alert.alert('Lỗi', error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.title}>Mật Khẩu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        value={userpass}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <View style={styles.row}>
        <Text>Bạn không nhớ mật khẩu </Text>
        <TouchableOpacity onPress={() => navigation.navigate('FogotPass')}>
          <Text style={styles.link}>quên mật khẩu</Text>
        </TouchableOpacity>
      </View>

      <Button title="Đăng nhập" onPress={handleLogin} />
      <Button title="Đăng ký" onPress={() => navigation.navigate('CreateNewAccount')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
