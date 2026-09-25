import { StyleSheet } from 'react-native';

export default StyleSheet.create({
Container:
{
  flex:1,
  width:'100%',
  alignItems:'center',
  backgroundColor: '#ffffff',
  

},
 Titulo:
 {
  fontSize:50,
  textAlign:'center',
  width:'100%',
  marginTop: '10%',
  fontWeight:'bold',
  color:'#000000'
 },

Bola:
{
    width: '50%',                 
    aspectRatio: 1,            
    borderRadius: '60%',         
    backgroundColor: '#c0c0c0', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:'10%'
},

textoBola: {
    color: '#ffffff',
    fontSize: 100,
    fontWeight: 'bold',
    justifyContent: 'center',
  },

  input: {
  height: 40,
  width: '80%',
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginTop: 25,
  textAlign: 'center',
  color: '#000000'
},

Botao:
{
 marginTop: '10%',
 color: '#ffffff',
 width:'80%',
},

Caixa: {
  width: '80%',
  padding: 20, 
  borderRadius: 10,
  backgroundColor: '#cecece',
  justifyContent: 'center',
  alignItems: 'center',
  
},
texto:
{
 marginTop:'10%'
},
TextoPontuacao:
{
  marginTop:'5%'
}

});