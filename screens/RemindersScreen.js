import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function RemindersScreen() {
  const [reminder, setReminder] = useState("");
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    setReminders([...reminders, reminder]);
    setReminder("");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Reminders</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Enter a reminder"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Add Reminder" onPress={handleAddReminder} />
      <FlatList
        data={reminders}
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
