import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function FormInput(props) {
  return (
      <View style={s.field}>
          <Text style={s.label}>{props.label}</Text>
          <TextInput secureTextEntry={!!props.isPassword} style={s.input} value={props.value} onChangeText={props.onChange} />
      </View>
  );
}

const s = StyleSheet.create({
    field: {
        width: '100%',
        marginBottom: 15
    },
    label: {
        fontSize: 14,
        marginBottom: 10
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#0a273b',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
})