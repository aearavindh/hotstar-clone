import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";

import ShowTile from "../components/ShowTile";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal={true} style={styles.carousal}>
        <ShowTile />
        <ShowTile />
        <ShowTile />
        <ShowTile />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent
  },
  carousal: {
    
  }
});
