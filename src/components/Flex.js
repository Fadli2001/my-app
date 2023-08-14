import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Flex UI</Text>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Flex - 1</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }}>
        <Text>Flex - 1</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "green" }}>
        <Text>Flex - 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
});

export default Flex;
