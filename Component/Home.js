import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from Firebase when the component mounts
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('tasks')
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((doc) => ({
          key: doc.id,
          ...doc.data(),
        }));
        setTasks(newTasks);
      });

    // Unsubscribe from the listener when unmounting the component
    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (task.length > 0) {
      // Add the new task to Firebase Firestore
      await firestore().collection('tasks').add({
        name: task,
        completed: false,
      });
      setTask(""); // Clear input after adding
    }
  };

  const deleteTask = async (taskKey) => {
    // Delete the task from Firestore
    await firestore().collection('tasks').doc(taskKey).delete();
  };

  const toggleCompleteTask = async (taskKey, currentStatus) => {
    // Update the task completion status in Firestore
    await firestore().collection('tasks').doc(taskKey).update({
      completed: !currentStatus,
    });
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity onPress={() => deleteTask(item.key)}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
          {item.name}
        </Text>
        <Button
          title="Complete"
          onPress={() => toggleCompleteTask(item.key, item.completed)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList data={tasks} renderItem={renderTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default App;
