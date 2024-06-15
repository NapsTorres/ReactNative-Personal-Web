import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

export default function Login({ setIsLoggedIn }) {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://ncf-intramurals-system.onrender.com/api/login', {
        Username,
        Password,
      });
  
      await AsyncStorage.setItem('token', response.data.token);
      setIsLoggedIn(true); // Set isLoggedIn to true after successful login
  
      Alert.alert('Successful Login 🎉');
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Failed to connect to server. Please try again later.');
    }
  };

  return (
    <LinearGradient colors={['#F5D300', '#00704a']} style={styles.container}>
      <Image
        source={require('./assets/NCF.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Text style={styles.logo}>Student Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '80%',
    height: 150, // Adjust the height as needed
    marginBottom: 20,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00704a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
