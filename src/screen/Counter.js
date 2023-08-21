import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter with State and Props</Text>
      <Button
        title={"Increase"}
        onPress={increase}
        btnStyle={[styles.button, { backgroundColor: "green" }]}
      />
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>

      <Button
        title={"Decrease"}
        onPress={decrease}
        btnStyle={[styles.button, { backgroundColor: "yellow" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
