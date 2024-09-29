import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Button, Alert, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const handleLogin = () => {
    if (username) {
      Alert.alert('Thông báo', 'Đăng nhập thành công');
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đăng nhập');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image
          source={require('./Image/login-concept')} // Đảm bảo đường dẫn đúng
          style={styles.image}
        />
        <Text style={styles.title}>Tên đăng nhập:</Text>
      </View> */}
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
        value={username}
        onChangeText={setUsername}
      />
      <Button
        title="Đăng nhập"
        onPress={handleLogin}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,  // Đặt kích thước phù hợp cho ảnh
    height: 50,
    marginRight: 10,  // Khoảng cách giữa ảnh và chữ "Tên đăng nhập"
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
  displayText: {
    fontSize: 20,
    marginTop: 20,
    color: 'blue',
  },
});

export default App;
