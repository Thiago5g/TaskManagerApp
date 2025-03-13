import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";
import { TaskContext } from "../../context/TaskContext";
import styles from "./styles";

const AddTaskScreen = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState("");
  const context = useContext(TaskContext);
  if (!context) return null;

  const { addTask } = context;

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      setTitle("");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nova tarefa..." value={title} onChangeText={setTitle} />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
};

export default AddTaskScreen;
