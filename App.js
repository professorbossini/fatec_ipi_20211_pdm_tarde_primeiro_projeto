import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      meuTexto: "Um texto inicial",
      contador: 0
    }
  }
  render (){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button
          title="Incrementar"
          onPress={ _ => this.setState({contador: this.state.contador + 1})}
        />
      </View>
    );
  }
}

//hook
/*export default function App() {
  
  const [outputText, setOutputText] = useState('Texto inicial');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button 
        title="Alterar texto"
        onPress={() => {setOutputText('Novo texto')}}
      />
    </View>
  );
}*/

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
);
