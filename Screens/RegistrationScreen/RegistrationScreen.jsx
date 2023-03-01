import { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  Alert,
  Pressable,
  View,
  Keyboard,
} from 'react-native';
import {
  ButtonStyle,
  InputStyle,
  HeaderStyle,
  ButtonTextStyle,
  FormStyle,
  inputTitle,
} from './RegistrationScreen.styled';

export const RegistrationScreen = ({ onSubmitRegData }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onInputName = text => {
    setName(text);
  };

  const onInputEmail = text => {
    setEmail(text);
  };

  const onInputPassword = text => {
    setPassword(text);
  };

  const onRegistration = () => {
    Keyboard.dismiss();
    const data = { name, email, password };
    onSubmitRegData(data);
    Alert.alert(
      'Credentials:',

      `name:${name},
      email:${email},
      password:${password}`
    );
    // console.log("name:", name);
    clearForm();
  };
  const clearForm = () => {
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <>
      <View style={FormStyle}>
        <Text style={HeaderStyle}>Registration</Text>
        <View>
          <Text style={inputTitle}>Email</Text>

          <TextInput
            placeholder="Write email"
            value={email}
            onChangeText={onInputEmail}
            style={InputStyle}
            autoFocus
            textAlign="center"
          />
        </View>
        <View>
          <Text style={inputTitle}>name</Text>

          <TextInput
            placeholder="Write name"
            value={name}
            onChangeText={onInputName}
            style={InputStyle}
            autoFocus
            textAlign="center"
          />
        </View>
        <View>
          <Text style={inputTitle}>Password</Text>
          <TextInput
            placeholder="Write password"
            value={password}
            onChangeText={onInputPassword}
            style={InputStyle}
            autoFocus
            textAlign="center"
            secureTextEntry
          />
        </View>

        <Pressable onPress={onRegistration} style={ButtonStyle}>
          <Text style={ButtonTextStyle}>Register</Text>
        </Pressable>
        {/* <Button title="Register" onPress={onRegistration} style={ButtonStyle} /> */}
      </View>
    </>
  );
};
