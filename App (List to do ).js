import React, { useState } from "react";
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

  const addTask = () => {
    if (task.length > 0) {
      setTasks([
        ...tasks,
        { key: Math.random().toString(), name: task, completed: false },
      ]);
      setTask("");
    }
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter((task) => task.key !== taskKey));
  };

  const toggleCompleteTask = (taskKey) => {
    setTasks(
      tasks.map((task) =>
        task.key === taskKey ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity onPress={() => deleteTask(item.key)}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
          {item.name}
        </Text>
        <Button title="Complete" onPress={() => toggleCompleteTask(item.key)} />
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
        onChangeText={setTask}
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
