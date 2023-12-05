import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [
  {
    id: 1,
    label: 'Internet',
    value: '90,00',
    date: '10/12/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Telefone',
    value: '60,00',
    date: '10/12/2023',
    type: 0
  },
  {
    id: 3,
    label: 'Salario',
    value: '2500,00',
    date: '10/12/2023',
    type: 1
  },

]

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Header name="Jader Cardoso" />

        <Balance saldo="3500,90" gastos="-390,22" />
        <Actions />

        <Text style={styles.title}>Ultimas Movimentações</Text>
        <FlatList style={styles.list} 
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    
    
  },
  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
