import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js'
export default function ListaDeSignosAuto() {
  const filmes = [
    { 
      titulo:'Alice no País das Maravilhas',
      descricao: 'Uma nova adaptação ou releitura da clássica história mágica e fantasiosa criada por Lewis Carroll, onde a jovem Alice explora um mundo repleto de personagens excêntricos e absurdos.',
      Estreia: '22/08/2026',
      imagem:require ('../../assets/alice.jpeg')
    },
    {  
      titulo:'Homen-Aranha Aranhaverso',
      descricao:'Aclamada animação que mergulha nas complexidades do multiverso, acompanhando Miles Morales em sua jornada épica ao lado de diferentes versões do herói aracnídeo.',
      Estreia:'23/08/2026',
      imagem:require ('../../assets/Aranhaverso.jpeg')
    },
    { 
      titulo:'La La Land',
      descricao:'O premiado musical romântico que acompanha um pianista de jazz e uma aspirante a atriz tentando conciliar o amor e suas carreiras artísticas em Los Angeles.',
      Estreia:'23/08/2026',
      imagem:require ('../../assets/LaLa.jpeg'),
    },
    { 
      titulo:'Coraline 2',
      descricao:'A continuação da aclamada animação em stop-motion, trazendo novos mistérios sombrios e desafios sobrenaturais para a corajosa Coraline.',
      Estreia:'24/08/2026',
      imagem:require ('../../assets/Coraline_.jpeg')
    },
    {  
      titulo:'Toy Story 5',
      descricao:'A nova aventura da clássica franquia da Pixar, onde Woody, Buzz Lightyear e o restante dos brinquedos encaram novos desafios em um mundo cada vez mais conectado à tecnologia.',
      Estreia:'25/08/2026',
      imagem:require ('../../assets/toysory5.png')
    },
    { 
      titulo:'Só por Uma Noite',
      descricao:'Uma comédia romântica moderna e irreverente que se passa em uma versão de Nova York onde, por uma única noite no ano, solteiros têm permissão para buscar conexões casuais, gerando grandes desencontros para dois desconhecidos.',
      Estreia:'25/08/2026',
      imagem:require ('../../assets/SOporUmaNoite.jpeg')
    },
    { 
      titulo:'Divertida Mente',
      descricao:'Animação emocionante que explora o funcionamento da mente humana através das personificações das emoções (como Alegria, Tristeza e Raiva) dentro da cabeça de uma jovem.',
      Estreia:'26/08/2026',
      imagem:require ('../../assets/mente.jpeg')
    },
    {
      titulo:'O fim da rua',
      descricao:'Um filme de ficção científica e suspense que acompanha uma família cujo bairro suburbano é misteriosamente transportado para uma realidade hostil e pré-histórica repleta de dinossauros.',
      Estreia:'03/09/2026',
      imagem:require ('../../assets/o fimdarua.jpeg')
    },
    { 
      titulo:'Zootopia 2',
      descricao:'A continuação do sucesso da Disney, trazendo a policial coelha Judy Hopps e a raposa Nick Wilde de volta para novas investigações na metrópole habitada por animais.',
      Estreia:'05/09/2026',
      imagem:require ('../../assets/Zootopia.jpeg')
    },
    { 
      titulo:'Homen-Aranha',
      descricao:'Longa-metragem focado nas clássicas aventuras de ação e heroísmo do amigão da vizinhança contra o crime em Nova York.',
      Estreia:'07/09/2026',
      imagem:require ('../../assets/Homem-Aranha.jpeg')
    },
    { 
      titulo:'Patrulha Canina',
      descricao:'Aventura voltada para o público infantil, onde um grupo de filhotes heroicos liderados por um menino chamado Ryder usa o trabalho em equipe para salvar a Adventure Bay.',
      Estreia:'09/09/2026',
      imagem:require ('../../assets/Patrulha.jpeg'),
    },
    { 
      titulo:'Rio 2',
      descricao: 'Nesta vibrante continuação, Blu, Jade e seus três filhos deixam o conforto da cidade do Rio de Janeiro para uma aventura na selva amazônica.',
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
            descricao={filme.descricao}
            Estreia={filme.Estreia}
            imagem={filme.imagem}
          />
        ))}
      </ScrollView>
    </View>
  )
}


