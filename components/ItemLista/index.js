 import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxFilme}>
      <Text style={estilo.nomeFilme}>{props.titulo}</Text>

      <View style={estilo.conteudo}>
        <Image source={props.imagem} style={estilo.imagem} />

        <View style={estilo.textoContainer}>
          {props.descricao ? (
            <Text style={estilo.descricaoFilme}>Descrição: {props.descricao}</Text>
          ) : null}

          <Text style={estilo.estreia}>Estreia: {props.Estreia}</Text>
        </View>
      </View>
    </View>
  );
}
//colocar limite de caracter na descrição, e deixar com ler mais