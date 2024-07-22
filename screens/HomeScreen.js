import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "@/components/ThemedComponents";

export default function HomeScreen({ navigation }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to MIttr</ThemedText>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button
        title="Reminders"
        onPress={() => navigation.navigate("Reminders")}
      />
      <Button
        title="Play Quizzes"
        onPress={() => navigation.navigate("Quizzes")}
      />
      <Button
        title="Medical History"
        onPress={() => navigation.navigate("MedicalHistory")}
      />
      <Button title="Send SOS" onPress={() => navigation.navigate("SOS")} />
      <Button
        title="Nearest Hospitals"
        onPress={() => navigation.navigate("NearestHospitals")}
      />
      <Button
        title="Live Tracking"
        onPress={() => navigation.navigate("LiveTracking")}
      />
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
