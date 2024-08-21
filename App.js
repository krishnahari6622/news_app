import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AppProvider } from "./src/contexts/AppContext";
import NewsScreen from "./src/Screens/NewsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WebViewScreen from "./src/Screens/WebViewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="NewsScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
