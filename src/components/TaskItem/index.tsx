import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { TaskContext } from "../../context/TaskContext";
import styles from "./styles";

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem = ({ task }: TaskItemProps) => {
  const context = useContext(TaskContext);
  if (!context) return null;

  const { toggleTask } = context;

  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)} style={[styles.container, task.completed && styles.completed]}>
      <Text style={[styles.text, task.completed && styles.completedText]}>{task.title}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
