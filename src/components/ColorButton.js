import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const ColorButton = ({ backgroundColor, onSelect = (f) => f }) => {
  return (
    <TouchableHighlight
      style={styles.btn}
      onPress={() => onSelect(backgroundColor)}
      underlayColor="orange"
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor }]} />
        <Text style={styles.text}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
    padding: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,.8)",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  sample: {
    height: 10,
    width: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    margin: 5,
  },
});

export default ColorButton;
