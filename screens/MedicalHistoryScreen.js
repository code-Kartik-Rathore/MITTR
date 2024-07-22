import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function MedicalHistoryScreen() {
  const [entry, setEntry] = useState("");
  const [history, setHistory] = useState([]);

  const handleAddEntry = () => {
    setHistory([...history, entry]);
    setEntry("");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Medical History</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter medical history"
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Add Entry" onPress={handleAddEntry} />
      <FlatList
        data={history}
        renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
        keyExtractor={(item, index) => index.toString()}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});
