import React, { useContext } from "react";
import { View, FlatList, Button } from "react-native";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../../components/TaskItem";
import styles from "./styles";

const TaskListScreen = ({ navigation }: { navigation: any }) => {
  const context = useContext(TaskContext);
  if (!context) return null;

  const { tasks, clearCompleted } = context;

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate("AddTask")} />
      <Button title="Limpar Concluídas" onPress={clearCompleted} />
    </View>
  );
};

export default TaskListScreen;
