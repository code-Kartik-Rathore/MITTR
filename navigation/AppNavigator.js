import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen";
import SignupScreen from "@/screens/SignupScreen";
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import RemindersScreen from "@/screens/RemindersScreen";
import QuizzesScreen from "@/screens/QuizzesScreen";
import MedicalHistoryScreen from "@/screens/MedicalHistoryScreen";
import SOSScreen from "@/screens/SOSScreen";
import NearestHospitalsScreen from "@/screens/NearestHospitalsScreen";
import LiveTrackingScreen from "@/screens/LiveTrackingScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="Quizzes" component={QuizzesScreen} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistoryScreen} />
        <Stack.Screen name="SOS" component={SOSScreen} />
        <Stack.Screen
          name="NearestHospitals"
          component={NearestHospitalsScreen}
        />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
