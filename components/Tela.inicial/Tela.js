import React, { useState } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, TextInput } from 'react-native';
import estilo from './css'

const Tela = () => {

  const [num_escolhido, setNumEscolhido] = useState('');
  const [num_sorteado, setNumSorteado] = useState(0);
  const [num_rodadas, setNumRodadas] = useState(1);
  const [textoguardado, setTextoGuardado] = useState('');
  const [pontuacao, setRodadaPontuacao] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [pontoRodada, setPontoRodada] = useState(0);



  const ValidarNum = () => {
    const num = parseInt(num_escolhido, 10)
    if (num >= 100 || num < 0 || isNaN(num)) {
      setTextoGuardado('O número deve ser entre 0 a 99');
      return false;
    }
    else {
      setTextoGuardado('');
      return true;
    }

  };

  const criarNumero = () => {
    if (!ValidarNum()) { return; }

    if (num_rodadas <= 5) {
      const NumeroCriado = Math.floor(Math.random() * 100);
      setNumSorteado(NumeroCriado);

      const num = parseInt(num_escolhido, 10)

      const operacao = num - NumeroCriado;
      const Ponto = Math.abs(operacao);
      const resultado = 100 - Ponto;

      setPontoRodada(resultado);

      setRodadaPontuacao(prevPontos => prevPontos + resultado);
      setNumRodadas(prevRodadas => prevRodadas + 1);
      setNumEscolhido('');
    }

    if (num_rodadas === 5) {
      setJogoFinalizado(true);
    }

  };
  const MensagemPontuacao = (pontos) => {
    if(pontos == 500)
      return 'Pontuação máxima! Incrível!';
    if(pontos > 449)
      return 'Quase perfeito!'; 
    if(pontos > 299)
      return 'Mandou bem!';
    if (pontos > 249) 
      return 'Está quase lá!';
    
    return 'Muito ruim';
  };

  const reiniciarJogo = () => {
    setNumEscolhido('');
    setNumSorteado(0);
    setNumRodadas(1);
    setTextoGuardado('');
    setRodadaPontuacao(0);
    setPontoRodada(0);
  };

  return (

    <ScrollView contentContainerStyle={estilo.Container}>
      <Text style={estilo.Titulo}>Jogo do Sorteio</Text>


      <View style={estilo.Bola}>
        <Text style={estilo.textoBola}>{num_sorteado}</Text>
        <Text>Rodada: {num_rodadas - 1}</Text>

      </View>

      <Text style={estilo.texto}>{textoguardado}</Text>
      <Text>Pontuação da rodada: {pontoRodada}</Text>

      {jogoFinalizado && (
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
      <View style={estilo.Reiniciar}>
        <Button
          title="Jogar Novamente"
          onPress={reiniciarJogo}
        />
      </View>
    </ScrollView>


  );
};

export default Tela;