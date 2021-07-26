import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default function PicsItem({data, onPressEvent}) {
  return (
    <TouchableOpacity onPress={() => onPressEvent(data.thumbnail)} style={s.itemContainer}>
      <View style={s.item}>
        <Image source={{uri: data.thumbnail}} style={s.thumbnail} />
        <View style={s.content}>
          <Text style={s.title}>{data.title}</Text>
          <Text style={s.date}>{data.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    marginTop: -5,
  },

  item: {
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.41,
    shadowRadius: 1.11,

    elevation: 4,
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  itemContainer: {
    paddingHorizontal: 3,
    flexBasis: '50%',
    maxWidth: '50%',
  },
});
