import { TouchableOpacity, Text } from "react-native";
import Styles from "../screens/Calculator.style";

export default function Button({ title, isOperator }) {
  return (
    <TouchableOpacity style={Styles.calculatorBtn}>
      <Text style={isOperator ? Styles.operatorColor : Styles.numberColor}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
