import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function TButton(props) {
  const { onPress, title = "Button" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  textButton: {
    color: "rgb(151, 137, 106)",
    fontFamily: "tarkov-font-bold"
  }
})