import React from "react";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, Feather } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "CreatePost") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Posts") {
            iconName = "grid";
          }
          return (
            <View style={focused ? styles.buttonWrapperActive : styles.buttonWrapper}>
              <Feather
                name={iconName}
                size={24}
                color={focused ? "#FFFFFF" : "#616161"}
              />
            </View>
          );
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#616161",
        tabBarStyle: {
          height: 83,
          paddingBottom: 22,
          paddingTop: 9,
          paddingHorizontal: 26,
          backgroundColor: "#FFFFFF",
        },
        headerStyle: {
          borderBottomColor: "#BDBDBD",
          borderBottomWidth: 0.33,
          height: 88,
        },
        headerTitleAlign: "center",
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
          fontWeight: 500,
          backgroundColor: "#FFFFFF",
        },
      })}
    >

      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",

          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color={"#BDBDBD"}
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        })}
      />

      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",

          headerLeft: () => (
            <Octicons
              name="arrow-left"
              size={24}
              color={"#212121CC"}
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            />
          ),
          tabBarStyle: {
            display: "none",
          },
        })}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonWrapperActive: {
    width: 70,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  buttonWrapper: {
    backgroundColor: "#FFFFFF",
  },
});
