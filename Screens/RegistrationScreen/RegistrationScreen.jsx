import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  ButtonStyle,
  InputStyle,
  HeaderStyle,
  ButtonTextStyle,
  FormStyle,
  inputTitle,
} from './RegistrationScreen.styled';
// ====================FONTS:===================================
SplashScreen.preventAutoHideAsync();
// ====================/FONTS:===================================

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

  // ====================SCREEN WIDTH:===================================
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      console.log(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);
  // ====================/SCREEN WIDTH:===================================

  // ====================FONTS:===================================
  const [fontsLoaded] = useFonts({
    'Mynerve-Regular': require('../../assets/font/Mynerve-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  // ====================/FONTS:===================================

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require('../../assets/BgPic.jpg')}
          resizeMode="cover"
          style={styles.BgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
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
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  BgImg: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
