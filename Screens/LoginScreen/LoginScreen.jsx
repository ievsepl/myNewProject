import { useState } from 'react';
import { Text, TextInput, Button, Alert, Pressable } from 'react-native';
import {
  ButtonStyle,
  InputStyle,
  HeaderStyle,
  ButtonTextStyle,
} from './LoginScreen.styled';
export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputEmail = text => {
    setEmail(text);
  };

  const onInputPassword = text => {
    setPassword(text);
  };

  const onLogin = () => {
    Alert.alert('Credentials', `${email}+${password}`);
  };
  return (
    <>
      <Text style={HeaderStyle}>Login</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Write email"
        value={email}
        onChangeText={onInputEmail}
        style={InputStyle}
        autoFocus
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Write password"
        value={password}
        onChangeText={onInputPassword}
        style={InputStyle}
        autoFocus
      />
      <Pressable onPress={onLogin} style={ButtonStyle}>
        <Text style={ButtonTextStyle}>Login</Text>
      </Pressable>
      {/* <Button title="Login" onPress={onLogin} style={ButtonStyle} /> */}
      {/* <Text>Create new account</Text> */}
    </>
  );
};
