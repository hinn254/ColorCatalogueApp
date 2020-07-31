import React from "react";
import { StyleSheet, FlatList, AsyncStorage } from "react-native";
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
// import defaultColors from "./data/defaultColors.json";

export default class ColorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   backgroundColor: "blue",
      availableColor: [],
    };
    this.colorChange = this.colorChange.bind(this);
    this.newColor = this.newColor.bind(this);
  }

  async componentDidMount() {
    const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
    if (colorData) {
      const colors = JSON.parse(colorData);
      this.setState({
        availableColor: colors,
      });
    } else {
      console.error("Error loading colors", err);
    }
  }

  saveColors(colors) {
    AsyncStorage.setItem(
      "@ColorListStore:Colors", // name to save it on globally
      JSON.stringify(colors) // save it as a json string
    );
  }

  colorChange(backgroundColor) {
    this.setState({ backgroundColor });
  }

  newColor(color) {
    const newAddedColor = { id: Math.random(), color };
    const availableColor = [newAddedColor, ...this.state.availableColor];
    this.setState({
      availableColor,
    });
    // save colors after we set them
    console.log(this.state.availableColor);
    this.saveColors(availableColor);
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <>
        <ColorForm onNewColor={this.newColor} />
        <FlatList
          style={styles.page}
          data={this.state.availableColor}
          renderItem={({ item }) => {
            return (
              <ColorButton
                key={item.id}
                backgroundColor={item.color}
                // onSelect={(color) => this.colorChange(color)}
                // onSelect={(color) => this.colorChange(color)}
                onSelect={() =>
                  this.props.navigation.navigate("Details", {
                    color: item.color,
                  })
                }
              />
            );
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
  },
});

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
//   ProgressBarAndroid,
//   ProgressViewIOS,
//   Button,
//   Alert,
//   Dimensions,
//   Platform,
// } from "react-native";

// const { height, width } = Dimensions.get("window");

// export default function App() {
//   const onButtonPressed = () => {
//     Alert.alert(`${new Date().toLocaleTimeString()} Button clicked`);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Benny</Text>
//       <ActivityIndicator size="large" color="#61dbfb" />
//       {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
//       {Platform.OS === "android" && (
//         <ProgressBarAndroid
//           styleAttr="Horizontal"
//           indeterminate={false}
//           color="blue"
//           progress={0.5}
//         />
//       )}

//       <Button onPress={onButtonPressed} title="Press Me" />
//       <Text>Height: {height}</Text>
//       <Text>Width: {width}</Text>
//       <Text>OS : {Platform.OS}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
