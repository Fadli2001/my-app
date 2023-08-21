import { TouchableOpacity, Text } from "react-native";
import Styles from "../screens/Calculator.style";

export default function Button({ title, isOperator, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.calculatorBtn}>
      <Text style={isOperator ? Styles.operatorColor : Styles.numberColor}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
