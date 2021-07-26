import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import logo from '../assets/images/logo.png';

export default function Loader() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.resizeContain} />
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    resizeContain: {
        resizeMode: 'contain',
        width: '80%',
        height: 80,
    }
})
