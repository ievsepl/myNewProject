import { StatusBar } from 'expo-status-bar';
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from 'react-native';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };
export default function App() {
  // // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <LoginScreen />
          {/* <RegistrationScreen /> */}

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  button: {
    width: 200,
    height: 44,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'green',
    borderColor: 'black',
    marginBottom: 10,
  },
});

// // Шлях пишемо щодо компонента, де використовується <Image/>
// // Локальне зображення
// <Image source={require('./logo.png')}/>

// // Зображення з мережі
// <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
//        style={{width: 700, height: 700}} />
//
// фонове зобр
// ImageBackground;
