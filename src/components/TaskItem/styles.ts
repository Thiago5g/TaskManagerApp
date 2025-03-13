import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  completed: {
    backgroundColor: "#d1e7dd",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#6c757d",
  },
});

export default styles;
