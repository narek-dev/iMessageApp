import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../assets/images/logo.png';
import FormInput from '../components/FormInput';
import LoginFormFooter from '../components/LoginFormFooter';

export default function Login({logining, message}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View style={s.container}>
      <Image style={s.logo} source={Logo} />
      <Text>login: narek.yazeryan@esterox.am , pass: 123456789</Text>
      <View style={s.loginForm}>
        <FormInput value={email} onChange={setEmail} label="Email" />
        <FormInput
          value={password}
          onChange={setPassword}
          label="Password"
          isPassword={true}
        />

        <LoginFormFooter
          email={email}
          password={password}
          isRemember={{value: isRemember, setValue: setIsRemember}}
          logining={logining}
        />
      </View>

      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
  },

  logo: {
    width: '80%',
    height: 70,
    resizeMode: 'contain',
  },

  loginForm: {
    backgroundColor: '#e4f6fe',
    width: '100%',
    borderRadius: 16,
    marginTop: 25,
    padding: 30,
  },

  formBtn: {
    backgroundColor: 'rgb(102, 237, 143)',
    paddingHorizontal: 24,
    paddingVertical: 7,
  },

  formBtnText: {
    color: '#000',
    fontSize: 18,
  },
});
