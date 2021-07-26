import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import ActionBtn from './ActionBtn';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function LoginFormFooter({email, password, isRemember, logining}) {
  const handleClick = () => {
    const url = 'https://app.picsnippets.com/password/reset';
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('Linking is not supported in your phone please reset your password manualy in our website.')
      }
    });
  };


  return (
    <View style={s.footer}>
      <View style={s.remember}>
        <BouncyCheckbox
          value={isRemember.value}
          onPress={ (isChecked) => isRemember.setValue(isChecked)  }
          text="Remember me"
          fillColor="#61ED97"
          size={18}
          iconStyle={{borderColor: '#111', borderRadius: 4}}
          textStyle={{
            fontWeight: '700',
            color: '#111',
            textDecorationLine: 'none',
            fontSize: 14,
          }}
        />
        <TouchableOpacity onPress={handleClick}>
            <Text>Forgot your password</Text>
        </TouchableOpacity>
      </View>
      <View style={s.login}>
        <ActionBtn email={email} password={password} isRemember={isRemember.value} event={logining} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
