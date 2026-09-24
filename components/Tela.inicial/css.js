import { StyleSheet } from 'react-native';

export default StyleSheet.create({
Container:
{
  flex:1,
  width:'100%',
  alignItems:'center',
  backgroundColor: '#000000',
  

},
 Titulo:
 {
  fontSize:50,
  textAlign:'center',
  width:'100%',
  marginTop: '10%',
  fontWeight:'bold',
  color:'#ffff'
 },

Bola:
{
    width: '50%',                 
    aspectRatio: 1,            
    borderRadius: '60%',         
    backgroundColor: '#ffffff', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:'10%'
},

textoBola: {
    color: '#000000',
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
  marginTop: 15,
  textAlign: 'center',
  color: '#ffffff'
},

Botao:
{
 marginTop: '10%',
 color: '#ffffff'
}
});