import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      
      {/* Logo atau icon aplikasi */}
      <Image 
        source={require('../assets/icon.png')}  // Ganti path jika file icon Anda berbeda
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back!</Text>

      {/* Input untuk email */}
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input untuk password */}
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link untuk registrasi atau lupa password */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? 
          <Text style={styles.link}> Sign up</Text>
        </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#777',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
