import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput, Appbar, PaperProvider, Button, Text} from 'react-native-paper';

export default function App() {

  const [altura, setAltura] = React.useState(""); 
  const [peso, setPeso] = React.useState("");
  const [resultado, setResultado] = React.useState(0);
  const Calcula = () =>{   
    const alturaF = parseFloat(altura.replace(',','.'))
    const pesoF   = parseFloat(peso.replace(',','.'))
    
    const resultado = (pesoF/(alturaF*alturaF))
    setResultado(resultado.toFixed(1))
    
  }
  
  return (
    <PaperProvider>
     <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Calculadora IMC" />
     </Appbar.Header>
     <TextInput
      placeholder='Altura'
      style={styles.campo}
      keyboardType='decimal-pad'
      onChangeText={text => setAltura(text)}/>
     <TextInput
      placeholder='Peso'
      style={styles.campo}
      keyboardType='decimal-pad'
      onChangeText={text => setPeso(text)}/>
     <Button
     icon={'calculator'}
     style={styles.botaoIMC}
     onPress={() => Calcula()}>Calcula IMC</Button> 
     <Text style={styles.resultText}>Resultado: {resultado}</Text>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213daw',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campo: {
    width:    '70%',
    alignSelf:'center',
    display:  'flex', 
    marginTop:'5%',
    borderTopLeftRadius:'10%',
    borderTopRightRadius:'10%',
    borderRadius:'10%'
  },
  botaoIMC:{
    backgroundColor:'#DCDCDC',
    width:          '50%',
    alignSelf:      'center',
    marginTop:      '3%',
    borderRadius:   '10%'
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  }
});
