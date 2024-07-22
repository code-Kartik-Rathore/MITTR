import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const handleSaveProfile = () => {
    // Add save profile logic here
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Profile</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
