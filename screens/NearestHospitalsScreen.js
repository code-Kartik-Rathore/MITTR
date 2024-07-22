import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function NearestHospitalsScreen() {
  const handleFindHospitals = () => {
    // Add nearest hospitals finding logic here
    alert("Finding Nearest Hospitals...");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Nearest Hospitals</ThemedText>
      <Button title="Find Nearest Hospitals" onPress={handleFindHospitals} />
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
