import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

function carregaIcone(likeada) {

  return likeada ? require('../img/likeada.png') : require('../img/like.png')
  
}

function mostraLikers(likers) {

  if(!likers) {
    return
  }

  return <Text style={styles.like}>{likers} {likers > 1 ? 'curtidas' : 'curtida' } </Text>
  
}

export default function List(props){
  
  return(
    <View>
    <View style={styles.viewPerfil}>
      
      <Image
        source={{uri: props.data.imgPerfil }}
        style={styles.fotoPerfil}
      />
      <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      
    </View>

    <Image
    resizeMode='cover'    
    source={{uri: props.data.imgPublicacao }}
    style={styles.fotoPublicacao}
    />

    <View 
     style={styles.areBtn}>
      <TouchableOpacity>
        <Image source={carregaIcone(props.data.likeada)} style={styles.iconeLike}  />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../img/comment.png')} style={styles.iconeLike}  />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../img/send.png')} style={styles.iconeLike}  />
      </TouchableOpacity>

     </View>

     {mostraLikers(props.data.likers)}

     <View style={styles.descRodape}>
      <Text style={styles.descNome}>{props.data.nome}</Text>
      <Text style={styles.descricao}>{props.data.descricao}</Text>
     </View>

    </View>

  );
}

const styles = StyleSheet.create({

  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 32, 
    height:32, 
    borderRadius:25
  },
  nomeUsuario: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  fotoPublicacao: {
    height: 400,
    width: '100%',
    alignItems: 'center'
  },
  areBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 25,
    height: 25,
    marginEnd: 5
  },
  like : {
    fontWeight: 'bold',
    color: '#000',
    margin: 5 
  },
  descRodape: {
    flexDirection: 'row',
    marginLeft: 5,
    marginBottom: 15
  },
  descNome: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
  descricao: {
    color: '#000',
    marginLeft: 5,
    fontSize: 16,
  }


})
