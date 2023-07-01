import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';

import { RegistrationScreen } from './src/components/RegistrationScreen';
import { LoginScreen } from './src/components/LoginScreen';
import { CommentsScreen } from "./src/screens/CommentsScreen";
import { Home } from "./src/screens/Home";
import { MapScreen } from "./src/screens/MapScreen";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Octicons } from "@expo/vector-icons";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto": require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        {/* <View style={styles.container}> */}

        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />

      <MainStack.Screen 
          name="Comments" 
          component={CommentsScreen} 
          options={({navigation}) => ({
            title: "Коментарі",
            headerTitleAlign: "center",
            headerTintColor: "#212121",
            headerStyle: {borderBottomColor: "#BDBDBD", borderBottomWidth: 0.5},
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 17,
              fontFamily: "Roboto",
            },
            headerLeft: () => (
              <Octicons
                name="arrow-left"
                size={24}
                color={"#212121CC"}
                style={{ marginLeft: 16, padding: 5 }}
                onPress={() => navigation.navigate("Posts")}
              />
            ),
          })
        }
      />
        {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
    
    