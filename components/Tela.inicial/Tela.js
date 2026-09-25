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

 const [num_escolhido, setNumEscolhido] = useState('');
 const [num_sorteado, setNumSorteado] = useState(0);
 const [num_rodadas, setNumRodadas] = useState(1);
 const [textoguardado, setTextoGuardado] = useState('');
 const [pontuacao, setRodadaPontuacao] = useState(0);
 const [jogoFinalizado, setJogoFinalizado] = useState(false);



const ValidarNum = () =>
 {
  const num = parseInt(num_escolhido,10)
  if(num >= 100 || num < 0 || isNaN(num))
  {
    setTextoGuardado('O número deve ser entre 0 a 99');
    return false;
  }
  else
  {
    setTextoGuardado('');
    return true;
  }

  };

 const criarNumero = () =>
 {
    if(!ValidarNum())
    {return; }

    if(num_rodadas <= 5)
    {
      const NumeroCriado = Math.floor(Math.random() * 100);
      setNumSorteado (NumeroCriado);
      
      const num = parseInt(num_escolhido,10)

      const operacao = num - NumeroCriado;
      const Ponto = Math.abs(operacao);
      const resultado = 100 - Ponto;


    setRodadaPontuacao(prevPontos => prevPontos + resultado);
    setNumRodadas(prevRodadas => prevRodadas + 1);
    setNumEscolhido ('');
    }

    if (num_rodadas === 5) {
      setJogoFinalizado(true);
    }

 };
  const MensagemPontuacao = (pontos) => {
  if (pontos >= 450 && pontos <= 499) {
    return 'Quase perfeito!';
  } else if (pontos >= 300 && pontos <= 449) {
    return 'Mandou bem!';
  } else if (pontos >= 100 && pontos <= 299) {
    return 'Está quase lá!';
  } else if (pontos === 500) {
    return 'Pontuação máxima! Incrível!';
  } else {
    return '';
  }
}; 

  return (

    <View style={estilo.Container}>
     <Text style={estilo.Titulo}>Jogo do Sorteio</Text>
     

      <View style={estilo.Bola}>
       <Text style={estilo.textoBola}>{num_sorteado}</Text>
       <Text>Rodada: {num_rodadas - 1}</Text>

      </View>
    
      <Text style={estilo.texto}>{textoguardado}</Text>

      {jogoFinalizado &&(
      <View style={estilo.Caixa}>
          <Text>{MensagemPontuacao(pontuacao)}</Text>
          <Text style={estilo.TextoPontuacao}>Pontuação Total: {pontuacao}</Text>
    </View>
    )}
      <TextInput
        placeholder="Digite um numero entre 0 a 99 "
        keyboardType="numeric"
        value={num_escolhido}
        onChangeText={(texto) => setNumEscolhido(texto)}
        style={estilo.input}
      />

      <View style={estilo.Botao}>
      <Button
      title="Sorteiar"
      onPress={criarNumero}
      />
      </View>
    </View>
  

  );
 };

export default Tela;