import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress, btnStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
