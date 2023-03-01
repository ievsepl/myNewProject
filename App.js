import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mynerve-Regular': require('./assets/font/Mynerve-Regular.ttf'),
  });

  const onSubmitRegData = ({ name, email, password }) => {
    const RegData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(RegData);
  };

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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require('./assets/BgPic.jpg')}
          resizeMode="cover"
          style={styles.BgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            {/* <LoginScreen /> */}
            <RegistrationScreen onSubmitRegData={onSubmitRegData} />
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

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
