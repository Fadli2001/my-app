import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./Calculator.style";
import Button from "../components/Button";

export default function Calculator() {
  const [calc, setCalc] = React.useState("");
  const [result, setResult] = React.useState(0);

  const handleBtnPress = (buttonValue) => {
    if (isCharacterValid(calc.charAt(calc.length - 1))) {
      setCalc(calc + buttonValue);
    } else {
      if (isCharacterValid(buttonValue)) {
        setCalc(calc + buttonValue);
      }
    }
    console.log(calc);
  };

  function isCharacterValid(character) {
    // Definisikan pola ekspresi reguler untuk karakter yang diizinkan
    const allowedPattern = /^[^*/+\-]*$/;

    // Gunakan test() pada pola untuk memeriksa apakah karakter sesuai
    return allowedPattern.test(character);
  }

  const displayResult = () => {
    setResult(eval(calc));
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={Styles.calcView}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "300",
          }}
        >
          {calc}
        </Text>

        <Text
          style={{
            fontSize: 50,
            fontWeight: "200",
          }}
        >
          {result}
        </Text>
      </View>
      <View style={Styles.btnView}>
        <View style={Styles.row}>
          <Button title={"AC"} isOperator onPress={clear} />
          <Button title={"Del"} isOperator onPress={() => calc.slice(0, -1)} />
          <Button title={"÷"} isOperator onPress={() => handleBtnPress("/")} />
        </View>
        <View style={Styles.row}>
          <Button title={"1"} isGray onPress={() => handleBtnPress("1")} />
          <Button title={"2"} isGray onPress={() => handleBtnPress("2")} />
          <Button title={"3"} isGray onPress={() => handleBtnPress("3")} />
          <Button title={"*"} isOperator onPress={() => handleBtnPress("*")} />
        </View>
        <View style={Styles.row}>
          <Button title={"4"} isGray onPress={() => handleBtnPress("4")} />
          <Button title={"5"} isGray onPress={() => handleBtnPress("5")} />
          <Button title={"6"} isGray onPress={() => handleBtnPress("6")} />
          <Button title={"-"} isOperator onPress={() => handleBtnPress("-")} />
        </View>
        <View style={Styles.row}>
          <Button title={"7"} isGray onPress={() => handleBtnPress("7")} />
          <Button title={"8"} isGray onPress={() => handleBtnPress("8")} />
          <Button title={"9"} isGray onPress={() => handleBtnPress("9")} />
          <Button title={"+"} isOperator onPress={() => handleBtnPress("+")} />
        </View>
        <View style={Styles.row}>
          <Button title={"00"} isGray onPress={() => handleBtnPress("00")} />
          <Button title={"0"} isGray onPress={() => handleBtnPress("0")} />
          <Button title={"="} isOperator onPress={() => displayResult()} />
        </View>
      </View>
    </View>
  );
}
