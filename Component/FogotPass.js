import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Button, Alert, View } from 'react-native';

const ForgotPass = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirm = () => {
    if (!username) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đăng nhập');
    } else if (!password || !confirmPassword) {
      Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu và xác nhận mật khẩu');
    } else if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu và mật khẩu nhập lại không trùng khớp');
    } else {
      Alert.alert('Thành công', 'Thay đổi mật khẩu thành công');
      // Xử lý logic tiếp theo sau khi thay đổi mật khẩu thành công (API request, điều hướng...)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>
      
      {/* Tên đăng nhập */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      
      {/* Mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu mới"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Nhập lại mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      {/* Nút xác nhận */}
      <Button
        title="Xác nhận"
        onPress={handleConfirm}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
  },
});

export default ForgotPass;
