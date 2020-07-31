import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "color";

export default class ColorDetails extends React.Component {
  render() {
    const { color: name } = this.props.route.params;
    const color = Color(name);
    const textColor = { fontSize: 30, color: color.negate().toString() };
    return (
      <View style={[styles.page, { backgroundColor: name }]}>
        <Text style={textColor}>{name}</Text>
        <Text style={textColor}>{color.rgb().toString()}</Text>
        <Text style={textColor}>{color.hsl().toString()}</Text>
        <Text style={textColor}>{color.luminosity()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
