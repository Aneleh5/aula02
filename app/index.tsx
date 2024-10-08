import {Text, View, StyleSheet} from 'react-native';
import BotoaoProps from '../components/botao';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <BotoaoProps label="Clique aqui" corFundo="green" onPress={handlePress} />
      <BotoaoProps label="Clique Agora" corFundo="pink" onPress={handlePress} />
      <BotoaoProps label="Clique de novo" corFundo="gray" onPress={teste} />
    </View>
  );
}