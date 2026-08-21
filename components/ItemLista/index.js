 import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxFilme}>
        <Text style={estilo.nomeFilme}>
        {props.titulo}
      </Text>
      <Image source={props.imagem} style={{ width: 200, height: 200, alignSelf: 'center' }} />
    
      
      <Text>
        {props.descricao}
      </Text>
      <Text>
        Estreia: {props.Estreia}
      </Text>
    </View>
  );
}