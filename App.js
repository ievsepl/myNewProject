// import { StatusBar } from 'expo-status-bar';
// import { useCallback, useEffect } from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import {
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// // ====================FONTS:===================================
// SplashScreen.preventAutoHideAsync();
// // ====================/FONTS:===================================

export default function App() {
  const onSubmitRegData = ({ name, email, password }) => {
    const RegData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(RegData);
  };
  const AuthStack = createStackNavigator();
  // // ====================SCREEN WIDTH:===================================
  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get('window').width;
  //     console.log(width);
  //   };
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change');
  //   };
  // }, []);
  // // ====================/SCREEN WIDTH:===================================

  // // ====================FONTS:===================================
  // const [fontsLoaded] = useFonts({
  //   'Mynerve-Regular': require('./assets/font/Mynerve-Regular.ttf'),
  // });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  // if (!fontsLoaded) {
  //   return null;
  // }
  // // ====================/FONTS:===================================

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <View style={styles.container} onLayout={onLayoutRootView}>
    //     <ImageBackground
    //       source={require('./assets/BgPic.jpg')}
    //       resizeMode="cover"
    //       style={styles.BgImg}
    //     >
    //       <KeyboardAvoidingView
    //         behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    //       >
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
    //       </KeyboardAvoidingView>
    //     </ImageBackground>
    //     <StatusBar style="auto" />
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },

//   BgImg: {
//     flex: 1,
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
