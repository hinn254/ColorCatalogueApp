import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default class ColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtColor: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.onNewColor(this.state.txtColor.toLowerCase());
    this.setState({ txtColor: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="enter a color..."
          autoCapitalize="none"
          onChangeText={(txtColor) => {
            this.setState({ txtColor });
          }}
          value={this.state.txtColor}
        />
        <Text onPress={this.submit} style={styles.button}>
          Add
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
    height: 70,
    paddingTop: 20,
  },
  textInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: "snow",
  },
  button: {
    backgroundColor: "darkblue",
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
  },
});
