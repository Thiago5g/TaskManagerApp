import React from "react";
import { TaskProvider } from "./src/context/TaskContext";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
};

export default App;
