 import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxFilme}>
      <Image source={props.imagem} style={{ width: 100, height: 100 }} />
      <Text style={estilo.nomeFilme}>
        {props.titulo}
      </Text>

      <Text>
        Estreia: {props.Estreia}
      </Text>
    </View>
  );
}