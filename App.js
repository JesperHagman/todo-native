import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useEffect } from 'react';

const todos = {  
  name:[ 
    "Städa",
    "Diska",
    "Plugga",
    "Träna"
  ]
}

/* const list = todos.map(item => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={{ flex: 1}}>
        {item.name.map((name, i) => (
          <Text>{i + 1}</Text>
        ))}
      </View>
    </View>
  );
});
 */
const handleTodos = () =>{

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
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell id="incomplete-tasks"> {todos.name} </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Doing</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell id="current-tasks">hej</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Done</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell id="completed-tasks"></DataTable.Cell>
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
