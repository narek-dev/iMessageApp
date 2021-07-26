import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PicsItem from './PicsItem';

export default function PicsList({data, onPressEvent}) {
  const renderItem = ({item}) => <PicsItem data={item} onPressEvent={onPressEvent}/>;

  return <FlatList numColumns={2} style={s.list} data={data} renderItem={renderItem} keyExtractor={item => item.id} />;
}

const s = StyleSheet.create({
    list: {
        marginTop: 50,
    }
});
