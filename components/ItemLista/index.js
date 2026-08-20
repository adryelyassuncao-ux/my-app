import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxFilme}>
      <Image source={props.imagem} style={{width:60, height:60 }}/>
      <Text style={estilo.nomeFilme}>
        {props.signo}
      </Text>
      
      <Text>
        Estreia: {props.ano} Gênero: {props.genero}
      </Text>
    </View>
  )
}