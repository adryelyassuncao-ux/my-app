import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Titulo from './components/Titulo';
import Tela from './components/Tela.inicial/Tela';


const App = () => {
  return (
    <View>
      <Titulo />
      <Tela/>
    </View>
  );
};

export default App;
