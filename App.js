import { StatusBar, StyleSheet, Text, View } from "react-native";
import FlexUI from "./src/components/FlexUI";

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={{
          fontWeight : 'bold',
          fontSize : 20,
          color : 'white'
        }}>Belajar Flex React Native</Text>
      </View>
      <View style={styles.container}>
        <View style={[{ backgroundColor: "blue" }, styles.box]} />
        <View style={[{ backgroundColor: "orange" }, styles.box]} />
        <View style={[{ backgroundColor: "brown" }, styles.box]} />
        <View style={[{ backgroundColor: "green" }, styles.box]} />
        <View style={[{ backgroundColor: "blue" }, styles.box]} />
        <View style={[{ backgroundColor: "grey" }, styles.box]} />
        <View style={[{ backgroundColor: "red" }, styles.box]} />
        <View style={[{ backgroundColor: "blueviolet" }, styles.box]} />
        <View style={[{ backgroundColor: "purple" }, styles.box]} />
        <StatusBar style="auto" />
      </View>      
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection : 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C356A",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: 'wrap',
    padding: 20,    
    maxHeight : 500,
    alignContent : "space-around"
  },
  box: {
    width: 50,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 5
  },
});

// View Component
// The most fundamental component for building a UI, View is a container that supports
// layout with flexbox, style, some touch handling, and accessibility controls. View maps
//  directly to the native view equivalent on whatever platform React Native is running on,
//   whether that is a UIView, <div>, android.view, etc.
