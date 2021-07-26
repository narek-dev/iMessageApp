import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ActionBtn({event, email, password, isRemember}) {
  return (
    <TouchableOpacity style={s.formBtn} title="Login" onPress={() => event(email, password, isRemember)}>
      <Text style={s.formBtnText}>Login</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  formBtn: {
    backgroundColor: 'rgb(102, 237, 143)',
    paddingHorizontal: 24,
    paddingVertical: 7,
    borderRadius: 24,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15,
  },

  formBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
});
