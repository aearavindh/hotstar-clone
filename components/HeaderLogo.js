import React from "react";
import { Image, StyleSheet, View } from "react-native";

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/hotstar-banner.png")}
        style={styles.image}
      />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  container: {
    width: 155,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
