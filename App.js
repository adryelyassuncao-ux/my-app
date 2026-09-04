import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Titulo from './components/Titulo';

const estilo = StyleSheet.create({
  tela: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxNumero: {
    borderColor: '#13b0c5',
    backgroundColor: '#13b0c5',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  tituloTexto: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  numero: {
    fontSize: 80,
    color: '#fff',
  },

  boxBotao: {
    width: 200,
  },
});



const TelaInicial = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [num_escolha, setNunEscolha] = useState('');
  const [num_rodadas, setNumRodadas] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100);

    setNumeroSorteado(novoNumero);

    setNumRodadas(num_rodadas + 1);


  };

  return (
    <View style={estilo.tela}>

      <Text style={estilo.tituloTexto}>
        Toque no botão e veja quem é o vencedor de 1 à 100
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button
          title="Sortear"
          onPress={gerarNumero}
          color="#1f4f66"
        />
      </View>

      <TextInput
        placeholder='Digite um número de 0 - 99'
        onChangeText={(text) => setNunEscolha(text)}
        value={num_escolha}
        keyboardType="numeric"
        maxLength={2}
      />

      <Text>{num_escolha}</Text>

      {num_rodadas >= 5 ?? (
        <Text>Final Jogo</Text>
      )}

    </View>
  );
};

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
};

export default App;