import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Calculator from "./Calculator";

export default function Home() {
  return (
    <>
      <View style={[styles.heading]}>
        <Text style={styles.headingTitle}>TodoApp</Text>
        <Text style={styles.headingDesc}>React Native Handson Pascal#12</Text>
        <View style={styles.underLineContent}></View>
      </View>
      <View style={styles.content}>
        <Calculator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    backgroundColor: "#4A55A2",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android
  },
  headingTitle: {
    color: "white",
    fontSize: 22,
  },
  headingDesc: {
    color: "white",
    marginBottom: 5,
  },
  underLineContent: {
    height: 2,
    width: 100,
    backgroundColor: "#A0BFE0",
  },
  content: {
    flex: 9,
    backgroundColor: "#f0f0f0",
  },
});
