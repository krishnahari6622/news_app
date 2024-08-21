import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const ImageComponent = ({ data }) => {
  let image = data
    ? { uri: data }
    : require("../../assets/images/imagePlaceholder.png");
  return (
    <View
      style={{
        width: "100%",
        height: "35%",
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: "100%",
        }}
        contentFit="fill"
      />
    </View>
  );
};

export default ImageComponent;
