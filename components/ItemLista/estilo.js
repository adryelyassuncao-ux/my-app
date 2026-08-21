import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  nomeFilme: {
    fontSize: 18,
    color: '#204550',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imagem: {
    width: 150,
    height: 200,
    marginRight: 12,
    borderRadius: 5,
  },
  textoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  descricaoFilme: {
    fontSize: 14,
    color: '#204550',
    marginBottom: 10,
    textAlign: 'left',
  },
  estreia: {
    fontSize: 14,
    color: '#204550',
  },
  boxFilme: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default estilo;
