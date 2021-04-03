import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const ShowTile = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2489/942489-h",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default ShowTile;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 220,
    margin: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
