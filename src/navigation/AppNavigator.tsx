import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TaskListScreen from "../screens/TaskList/index";
import AddTaskScreen from "../screens/AddTask/index";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: "Tarefas" }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: "Nova Tarefa" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
