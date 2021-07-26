import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function StandartBtn(props) {
  return (
    <TouchableOpacity onPress={props.event} style={s.btn}>
      <FontAwesome5 name={'comments'} />
      <Text style={s.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#00C6F7',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.99,
    shadowRadius: 9.3,
    elevation: 53,
  },

  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'rgb(10, 39, 59)',
  },
});
