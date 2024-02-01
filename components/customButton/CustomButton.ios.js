import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;