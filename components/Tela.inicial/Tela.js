import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import estilo from './css'


//preciso criar uma veriavel que armazena o numero escolhido<>
//criar uma variavel para guardar o numero gerado da maquina<>
//uma variavel para guardar em qual rodada esta<>
//maquina precisa criar um numero de 0 a 99<>
//maquina precisa validar o numero escolhido da pessoa para ver se da para acontecer o jogo<>
//maquina precisa acrescentar uma próxima rodada ate chegar em 5<>
//depois de numero escolhido e a pessoa enviar maquina faz o calculo da pontuação<>
//maquina guarda a pontuação da pessoa<>
//inicia uma nova rodada até chegar a 5
//final é mostrado a pontuação que é no maximo 500


const Tela = () => {

 const [num_escolhido, setNumEscolhido] = useState(0);
 const [num_sorteado, setNumSorteado] = useState(0);
 const [num_rodadas, setNumRodadas] = useState(1);
 const [textoguardado, setTextoGuardado] = useState('');
 //const [num_final, setNumeroFinal] = useState(null); 
 const [pontuacao, setRodadaPontuacao] = useState(0); 


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
  if(num_rodadas < 5)
  {
   const NumeroCriado = Math.floor(Math.random() * 100);
   setNumSorteado (NumeroCriado);

   const operacao = num_escolhido - NumeroCriado;
   const Ponto = Math.abs(operacao);
   const resultado = 100 - Ponto;

  
  setRodadaPontuacao(prevPontos => prevPontos + resultado);
  setNumRodadas(prevRodadas => prevRodadas + 1);
}
else
{
  setTextoGuardado("Você já concluiu as 5 rodadas")
}
  
 };


  return (

    <View style={estilo.Container}>
     <Text style={estilo.Titulo}>Jogo do Sorteio</Text>
      <Text>{textoguardado}</Text>

      <View style={estilo.Bola}>
       <Text style={estilo.textoBola}>{num_sorteado}</Text>
      </View>

      <TextInput
        placeholder="Digite um numero entre 0 a 99 "
        keyboardType="numeric"
        value={num_escolhido}
        onChangeText={(texto) => setNumEscolhido(texto)}
        style={estilo.input}
      />
      <Button
      title="Sorteiar"
      onPress={criarNumero}
      style={estilo.Botao}
      />
    </View>
  

  );


};

export default Tela;