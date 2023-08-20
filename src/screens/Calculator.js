import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./Calculator.style";
import Button from "../components/Button";

export default function Calculator() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={Styles.calcView}>
        <Text style={Styles.screenSecondNumber}>Number View</Text>
      </View>
      <View style={Styles.btnView}>
        <View style={Styles.row}>
          <Button title={"AC"} isOperator />
          <Button title={"Del"} isOperator />
          <Button title={"%"} isOperator />
          <Button title={"/"} isOperator />
        </View>
        <View style={Styles.row}>
          <Button title={"1"} isGray />
          <Button title={"2"} isGray />
          <Button title={"3"} isGray />
          <Button title={"X"} isOperator />
        </View>
        <View style={Styles.row}>
          <Button title={"4"} isGray />
          <Button title={"5"} isGray />
          <Button title={"6"} isGray />
          <Button title={"-"} isOperator />
        </View>
        <View style={Styles.row}>
          <Button title={"7"} isGray />
          <Button title={"8"} isGray />
          <Button title={"9"} isGray />
          <Button title={"+"} isOperator />
        </View>
        <View style={Styles.row}>
          <Button title={"00"} isGray />
          <Button title={"0"} isGray />
          <Button title={","} isGray />
          <Button title={"="} isOperator />
        </View>
      </View>
    </View>
  );
}
