import { View, Text, StyleSheet } from 'react-native';
const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.tituloCabecalho}>
        Sorteio DevMedia
      </Text>

      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor
      </Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  boxTitulo: {
    height: 80,
    backgroundColor: '#1f4f66',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },

  tituloCabecalho: {
    color: '#0fc3d4',
    fontWeight: '700',
    fontSize: 20,
  },

  subtitulo: {
    color: '#fff',
  },
});

export default Titulo;