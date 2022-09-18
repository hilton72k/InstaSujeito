import React, { useState} from 'react';
import { FlatList, StyleSheet, View} from 'react-native';

import Header from './src/Header';
import List from './src/List';

const App = () => {


  const [feed, setFeed] = useState([{
    id: 1,
    nome: 'hilton72k',
    descricao: 'Mais um dia de muita dedicação!',
    imgPerfil: 'https://jhreactnative.000webhostapp.com/imgPerfil.jpg',
    imgPublicacao: 'https://jhreactnative.000webhostapp.com/imgPublicacao.jpg',
    likeada: false,
    likers: 1,

  }, {
    id: 2,
    nome: 'hilton72k',
    descricao: 'Mais um dia de muita dedicação!',
    imgPerfil: 'https://jhreactnative.000webhostapp.com/imgPerfil.jpg',
    imgPublicacao: 'https://instagram.fssa7-1.fna.fbcdn.net/v/t51.2885-15/274094230_5499375060106490_4738639073968334486_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fssa7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2P4TId2MIfMAX8fcy4t&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc3Mzc4MzUwNDM5Mzc0MzE1Mw%3D%3D.2-ccb7-5&oh=00_AT8bNGgnSZStEMSC4qSFubgi4Wor2RIPlYnvIlB3QYWE2A&oe=632CB24E&_nc_sid=30a2ef',
    likeada: false,
    likers: 1,

  }])
  
  return (
    <View style={styles.container}>

      <Header />

      <FlatList
        data={feed}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => <List data={item} /> }
      ></FlatList>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  }
});

export default App;
