import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexUI = () => {
  return (
    <View>
      <Text style={styles.titleText}>Flex UI</Text>
      <View>
        <View style={{ backroundColor: "#A020F0", flex: 1 }} />
        <View style={{ backgroundColor: "#7cb48f", flex: 3 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
});

export default FlexUI;
