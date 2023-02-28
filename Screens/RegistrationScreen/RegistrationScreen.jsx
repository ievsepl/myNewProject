import { useState } from "react";
import { Text, TextInput, Button, Alert, Pressable } from "react-native";
import {
  ButtonStyle,
  InputStyle,
  HeaderStyle,
  ButtonTextStyle,
} from "./RegistrationScreen.styled";

export const RegistrationScreen = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onInputName = (text) => {
    setName(text);
  };

  const onInputEmail = (text) => {
    setEmail(text);
  };

  const onInputPassword = (text) => {
    setPassword(text);
  };

  const onRegistration = () => {
    Alert.alert(
      "Credentials:",

      `name:${name},
      email:${email},
      password:${password}`
    );
    // console.log("name:", name);
  };
  return (
    <>
      <Text style={HeaderStyle}>Registration</Text>
      <Text>Email</Text>

      <TextInput
        placeholder="Write email"
        value={email}
        onChangeText={onInputEmail}
        style={InputStyle}
        autoFocus
      />
      <Text>name</Text>

      <TextInput
        placeholder="Write name"
        value={name}
        onChangeText={onInputName}
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
      <Pressable onPress={onRegistration} style={ButtonStyle}>
        <Text style={ButtonTextStyle}>Register</Text>
      </Pressable>
      {/* <Button title="Register" onPress={onRegistration} style={ButtonStyle} /> */}
    </>
  );
};
