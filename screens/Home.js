import React from 'react';
import logo from '../assets/images/logo.png';
import Particles from '../assets/images/particles.png';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import PicsList from '../components/PicsList';
import { removeData } from '../common/storage/authStorage';

const data = [
  {
    id: 1,
    title: 'Image 1',
    date: '05/12/2021',
    views: 0,
    thumbnail:
      'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
  },
  {
    id: 4,
    title: 'Image 2',
    date: '05/12/2021',
    views: 0,
    thumbnail:
      'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
  },
  {
    id: 2,
    title: 'Image 3',
    date: '05/12/2021',
    views: 0,
    thumbnail:
      'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
  },
  {
    id: 3,
    title: 'Image 4',
    date: '05/12/2021',
    views: 0,
    thumbnail:
      'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
  },
];



const Home = ({navigation}) => {

  const logout = () => {
    removeData().then( res => {
      navigation.navigate('Login');
    })
  }


  return (
    <ScrollView>
      <Image style={s.particles} source={Particles} />

      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
      
      <ScrollView style={s.container}>
        <View style={s.header}>
          <Image source={logo} style={s.logo}></Image>
          <Text style={s.subtitle}>Select a image</Text>
        </View>

        <PicsList
          data={data}
          onPressEvent={image => alert('Send This image as Message: ' + image)}
        />
      </ScrollView>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F3FBFE',
    display: 'flex',
    paddingHorizontal: 25,
  },

  logo: {
    width: '60%',
    height: 60,
    resizeMode: 'contain',
  },

  header: {
    marginTop: 125,
    display: 'flex',
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 25,
    fontWeight: '300',
    color: '#82BFFF',
    marginTop: 20,
  },

  particles: {
    position: 'absolute',
    zIndex: 5,
    top: -10,
    width: 200,
    right: -60,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Home;
