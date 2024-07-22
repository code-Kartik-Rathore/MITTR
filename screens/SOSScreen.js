import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function SOSScreen() {
  const handleSendSOS = () => {
    // Add SOS sending logic here
    alert("SOS Sent!");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">SOS</ThemedText>
      <Button title="Send SOS" onPress={handleSendSOS} />
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
