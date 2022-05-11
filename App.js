import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useEffect } from 'react';

const todos = [
  "Städa",
  "Diska",
  "Plugga",
  "Träna"
]

const handleTodos = () =>{

  for (var i of todos) {
      
    }
    /* 
  <DataTable.Row>
    <DataTable.Cell>{i}</DataTable.Cell>
    <DataTable.Cell> </DataTable.Cell>
    <DataTable.Cell> </DataTable.Cell>
  </DataTable.Row> */
}


export default function App() {
  useEffect(
    handleTodos
  )
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>To do</DataTable.Title>
          <DataTable.Title>Doing</DataTable.Title>
          <DataTable.Title>Done</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{todos}</DataTable.Cell>
          <DataTable.Cell>Diska</DataTable.Cell>
          <DataTable.Cell>Plugga som fan</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>{todos}</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
