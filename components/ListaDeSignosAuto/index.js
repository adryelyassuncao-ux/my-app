import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js'
export default function ListaDeSignosAuto() {
  const filmes = [
    { 
      titulo:'Alice no País das Maravilhas',
      Estreia: '22/08/2026',
      imagem:require ('../../assets/alice.jpeg')
    },
    {  
      titulo:'Homen-Aranha Aranhaverso',
      Estreia:'23/08/2026',
      imagem:require ('../../assets/Aranhaverso.jpeg')
    },
    { 
      titulo:'La La Land',
      Estreia:'23/08/2026',
      imagem:require ('../../assets/LaLa.jpeg'),
    },
    { 
      titulo:'Coraline 2',
      Estreia:'24/08/2026',
      imagem:require ('../../assets/Coraline_.jpeg')
    },
    {  
      titulo:'Toy Story 5',
      Estreia:'25/08/2026',
      imagem:require ('../../assets/toysory5.png')
    },
    { 
      titulo:'Só por Uma Noite',
      Estreia:'25/08/2026',
      imagem:require ('../../assets/SOporUmaNoite.jpeg')
    },
    { 
      titulo:'Divertida Mente',
      Estreia:'26/08/2026',
      imagem:require ('../../assets/mente.jpeg')
    },
    {
      titulo:'O fim da rua',
      Estreia:'03/09/2026',
      imagem:require ('../../assets/o fimdarua.jpeg')
    },
    { 
      titulo:'Zootopia 2',
      Estreia:'05/09/2026',
      imagem:require ('../../assets/Zootopia.jpeg')
    },
    { 
      titulo:'Homen-Aranha',
      Estreia:'07/09/2026',
      imagem:require ('../../assets/Homem-Aranha.jpeg')
    },
    { 
      titulo:'Patrulha Canina',
      Estreia:'09/09/2026',
      imagem:require ('../../assets/Patrulha.jpeg'),
    },
    { 
      titulo:'Rio 2',
      Estreia:'12/09/2026',
      imagem:require ('../../assets/poster.jpeg')
    },
  ];
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        {filmes.map((filme, index) => (
          <ItemLista
            key={index}
            titulo={filme.titulo}
            Estreia={filme.Estreia}
            imagem={filme.imagem}
          />
        ))}
      </ScrollView>
    </View>
  )
}


