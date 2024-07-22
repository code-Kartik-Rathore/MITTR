import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function LiveTrackingScreen() {
  const handleStartTracking = () => {
    // Add live tracking logic here
    alert("Live Tracking Started!");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Live Tracking</ThemedText>
      <Button title="Start Live Tracking" onPress={handleStartTracking} />
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
