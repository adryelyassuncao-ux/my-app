import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  TextInput, 
  SafeAreaView, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  useWindowDimensions 
} from 'react-native';
import estilo from './css';

const Tela = () => {
  const [num_escolhido, setNumEscolhido] = useState('');
  const [num_sorteado, setNumSorteado] = useState(null);
  const [num_rodadas, setNumRodadas] = useState(1);
  const [textoguardado, setTextoGuardado] = useState('');
  const [pontuacao, setRodadaPontuacao] = useState(0);

  // Obtém a largura e altura em tempo real para responsividade imediata
  const { width } = useWindowDimensions();

  // Define uma largura proporcional ao ecrã (máximo de 450px para tablets/desktop)
  const cardResponsiveWidth = Math.min(width * 0.9, 450);

  const ValidarNum = () => {
    const numeroConvertido = parseInt(num_escolhido, 10);

    if (num_escolhido === '' || isNaN(numeroConvertido) || numeroConvertido < 0 || numeroConvertido >= 100) {
      setTextoGuardado('O número deve ser entre 0 a 99');
      return false;
    } else {
      setTextoGuardado('');
      return true;
    }
  };

  const criarNumero = () => {
    if (!ValidarNum()) return;
    if (num_rodadas > 5) return;

    const valorUsuario = parseInt(num_escolhido, 10);
    const NumeroCriado = Math.floor(Math.random() * 100);
    setNumSorteado(NumeroCriado);

    let diferenca;
    if (valorUsuario > NumeroCriado) {
      diferenca = valorUsuario - NumeroCriado;
    } else {
      diferenca = NumeroCriado - valorUsuario;
    }

    let Ponto = 100 - diferenca;
    if (Ponto < 0) Ponto = 0;

    setRodadaPontuacao(pontuacao + Ponto);
    setNumRodadas(num_rodadas + 1);
    setNumEscolhido('');
  };

  const obterMensagemFinal = () => {
    if (pontuacao >= 490) return "Você conseguiu! Um arraso babilônico";
    if (pontuacao >= 400) return "Só mais um pouquinho";
    if (pontuacao >= 300) return "Parabéns, você está muito perto";
    if (pontuacao >= 200) return "Você chegou perto!";
    return "Não foi dessa vez";
  };

  return (
    <SafeAreaView style={estilo.safeContainer}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1, width: '100%' }}
      >
        <ScrollView 
          contentContainerStyle={estilo.scrollContainer}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={[estilo.card, { width: cardResponsiveWidth }]}>
            {num_rodadas <= 5 ? (
              <>
                <Text style={estilo.tituloRodada}>Rodada {num_rodadas} de 5</Text>

                <TextInput
                  style={estilo.input}
                  placeholder="Número de 0 a 99"
                  placeholderTextColor="#8E72A7"
                  keyboardType="numeric"
                  value={num_escolhido.toString()}
                  onChangeText={(v) => setNumEscolhido(v)}
                />

                <View style={estilo.botaoContainer}>
                  <Button title="Enviar" color="#7B2CBF" onPress={criarNumero} />
                </View>

                {textoguardado !== '' && <Text style={estilo.textoErro}>{textoguardado}</Text>}

                {num_sorteado !== null && (
                  <View style={estilo.painelInfo}>
                    <Text style={estilo.textoInfo}>
                      Sorteado: <Text style={estilo.destaqueNumero}>{num_sorteado}</Text>
                    </Text>
                    <Text style={estilo.textoInfo}>
                      Pontuação Atual: <Text style={estilo.destaqueNumero}>{pontuacao}</Text>
                    </Text>
                  </View>
                )}
              </>
            ) : (
              <>
                <Text style={estilo.tituloFim}>Fim de Jogo!</Text>
                <Text style={estilo.pontuacaoFinal}>
                  Pontuação Final: <Text style={estilo.destaqueNumero}>{pontuacao}</Text> / 500
                </Text>
                <Text style={estilo.mensagemFinal}>{obterMensagemFinal()}</Text>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Tela;