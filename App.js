import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import config from './app/config/Event1/config'

import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Main from "./screens/Main";

const Stack = createStackNavigator();

export default function App(props) {
    return (
      <View style={styles.container}>
        <Text>Event 1</Text>
        {/* {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Event1" component={Main} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
