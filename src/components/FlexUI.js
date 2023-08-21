import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const FlexUI = () => {
  return (
    <View style={{
      flex : 1
    }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Belajar Flex React Native
        </Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C356A",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 20,
    maxHeight: 500,
    alignContent: "space-around",
  },
  box: {
    width: 50,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
export default FlexUI;
