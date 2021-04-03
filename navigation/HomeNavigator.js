import React from "react";

import { View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ShowScreen from "../screens/ShowScreen";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import HeaderLogo from "../components/HeaderLogo";

const defaultNavOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerLeft: () => (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
      }}
    >
      <View style={{paddingTop: 12}}>
        <TouchableOpacity>
          <Ionicons name="md-menu" size={30} color={Colors.accent} />
        </TouchableOpacity>
      </View>
      <HeaderLogo />
    </View>
  ),
  headerRight: () => (
    <TouchableOpacity>
      <View style={{ margin: 10 }}>
        <Ionicons name="md-search" size={30} color={Colors.accent} />
      </View>
    </TouchableOpacity>
  ),
};

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Show" component={ShowScreen} />
    </HomeStackNavigator.Navigator>
  );
};
