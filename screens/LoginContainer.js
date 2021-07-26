import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {saveData, readData} from '../common/storage/authStorage';
import Loader from '../components/Loader';
import Login from './Login';

import Particles from '../assets/images/particles.png'

export default function LoginContainer({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Check Token existence
  useEffect(() => {
    navigation.addListener('focus', async () => {
      const token = await readData();
      setIsLoading(false);
      if (token) {
        navigation.navigate('Home', {token});
      }
    });
  }, [navigation]);

  // Logining Event Handler
  const logining = (email, password, isRemember) => {
    const data = {
      email,
      password,
      isRemember
    };

    RNFetchBlob.fetch(
      'POST',
      'https://social-network.samuraijs.com/api/1.0/auth/login',
      {
        'Content-Type': 'application/json',
      },
      JSON.stringify(data),
    )
      .then(({data}) => {
        const parsedData = JSON.parse(data);
        if (parsedData.resultCode !== 0) {
          setMessage(parsedData.messages.join(', '));
        } else {
          setMessage(null);
          if (isRemember) {
            saveData(parsedData.data.userId);
            alert('Data saved');
          }
          navigation.navigate('Home', {token: parsedData.data.userId});
        }
      })
      .catch(reject => {
        setMessage(reject);
      });
  };

  return (
    <View style={s.container}>
      <Image style={s.particles} source={Particles} />

      {isLoading ? <Loader /> : null}
      <Login message={message} logining={logining} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F3FBFE',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  particles: {
    position: 'absolute',
    zIndex: 5,
    top: -10,
    width: 200,
    right: -40,
    height: 100,
    resizeMode: 'contain'
  },
});
