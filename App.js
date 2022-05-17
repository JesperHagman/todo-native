import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Keyboard, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import Task from './components/Task';



export default function App() {
  const window = useWindowDimensions();
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItem([...taskItem, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItem]
    itemsCopy.splice(index, 1)
    setTaskItem(itemsCopy)
  }


  return (
    <View style={styles.container}>
    <StatusBar style='auto' />

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>

        <View style={styles.items}> 
          {
            taskItem.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}> 
          {
            taskItem.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Completed Tasks</Text>

        <View style={styles.items}> 
          {
            taskItem.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper} >
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    flexDirection: "row",
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    width: "95%"
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 85,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,

  },
  addText: {},
  test: {
    flexDirection: "row",
  },

});
