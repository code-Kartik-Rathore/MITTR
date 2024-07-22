import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function QuizzesScreen({ navigation }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Quizzes & Games</ThemedText>
      <Button title="Start Quiz" onPress={() => alert("Start Quiz")} />
      <Button title="Play Puzzle" onPress={() => alert("Play Puzzle")} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
