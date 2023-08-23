import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Hello(props) {
  const fullName = props.fullName !== undefined ? props.fullName : "Agus";
  const age = props.age !== undefined ? props.age : 20;
  return (
    <View>
      <Text>
        Hello, i'm {fullName} and {age} years old
      </Text>
    </View>
  );
}

function Greetings() {
  const props = {
    fullName: "Raisa",
    age: 25,
  };
  return (
    <View style={styles.container}>
      <Hello {...props} />
    </View>
  );
}

export default Greetings

const styles = StyleSheet.create({
  container: {
    height : 50,
    justifyContent : 'center',
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
