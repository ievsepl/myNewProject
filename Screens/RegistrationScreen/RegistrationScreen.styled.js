import { Platform, StyleSheet } from 'react-native';

export const FormStyle = StyleSheet.create({
  marginHorizontal: 60,
  justifyContent: 'center',
  //   alignItems: 'center',
});

export const HeaderStyle = StyleSheet.create({
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Mynerve-Regular',

  fontSize: 45,
  //   fontWeight: 700,
  color: 'orangered',
  marginBottom: 10,
});

export const inputTitle = StyleSheet.create({
  marginBottom: 10,
  textAlign: 'center',
  color: '#fff',
});

export const InputStyle = StyleSheet.create({
  //   width: 300,
  //   flex: 1,
  height: 30,
  borderWidth: 3,
  borderColor: 'yellowgreen',
  borderRadius: 10,
  //   padding: 5,
  marginBottom: 10,
  textAlign: 'center',
  color: '#fff',
});

export const ButtonStyle = StyleSheet.create({
  //   width: 300,
  height: 44,
  padding: 10,
  borderRadius: 10,
  //   borderWidth: 1,
  backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'yellowgreen',
  borderColor: 'black',
  marginBottom: 10,
});
export const ButtonTextStyle = StyleSheet.create({
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Mynerve-Regular',

  fontSize: 28,
  lineHeight: 30,
  //   fontWeight: 'bold',
  letterSpacing: 0.28,
  color: Platform.OS === 'ios' ? 'yellowgreen' : 'red',
});
