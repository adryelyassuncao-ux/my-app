 //import React from 'react';
 //import { View, Text, Image } from 'react-native';
 //import estilo from './estilo';

 //export default function ItemLista(props) {
 //  return (
 //    <View style={estilo.boxFilme}>
 //      <Image source={props.imagem} style={{width:60, height:60 }}/>
 //      <Text style={estilo.nomeFilme}>
 //        {props.titulo}
 //      </Text>
 //      
 //      <Text>
 //        Estreia: {props.estreia}
 //      </Text>
 //    </View>
 //  )
 //}
 import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxFilme}>
      <Image source={props.imagem} style={{ width: 60, height: 60 }} />
      <Text style={estilo.nomeFilme}>
        {props.titulo}
      </Text>

      <Text>
        Estreia: {props.Estreia}
      </Text>
    </View>
  );
}