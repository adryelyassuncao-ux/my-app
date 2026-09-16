import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import estilo from './css'
//preciso criar uma veriavel que armazena o numero escolhido<>
//criar uma variavel para guardar o numero gerado da maquina<>
//uma variavel para guardar em qual rodada esta<>
//maquina precisa criar um numero de 0 a 99<>
//maquina precisa validar o numero escolhido da pessoa para ver se da para acontecer o jogo<>
//maquina precisa acrescentar uma próxima rodada ate chegar em 5
//depois de numero escolhido e a pessoa enviar maquina faz o calculo da pontuação
//maquina guarda a pontuação da pessoa
//inicia uma nova rodada até chegar a 5
//final é mostrado a pontuação que é no maximo 500

const Tela = () => {

 const [num_escolhido, setNumEscolhido] = useState(0);
 const [num_sorteado, setNumSorteado] = useState(null);
 const [num_rodadas, setNumRodadas] = useState(1);
 const [textoguardado, setTextoGuardado] = useState('');
 //const [num_final, setNumeroFinal] = useState(null); talvel vc use ju no final
 const [pontuacao, setRodadaPontuacao] = useState(0); // essa talvez tambem vo deixar pra vc caso vc n use lembra de apagar


const ValidarNum = () =>
 {
  
  if(num_escolhido >= 100 || num_escolhido < 0 || isNaN(num_escolhido))
  {
    setTextoGuardado('O número deve ser entre 0 a 99');
    return;
  }
  else
  {
    setTextoGuardado('');
  }

  };
 const criarNumero = () =>
 {
   const NumeroCriado = Math.floor(Math.random() * 100);

   setNumSorteado (NumeroCriado);

   const operacao = num_escolhido - NumeroCriado;
   const Ponto = Math.abs(operacao);

   const resultado = 100 - Ponto;

   setNumRodadas (num_rodadas + 1);
 };
 
 
  return (
    
    <View>
      <text>{textoguardado}</text>
    </View>
  );
};

export default Tela;