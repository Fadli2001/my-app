import { StatusBar, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View
      style={{          
        flex: 1,
      }}
    >
      <Home/>      
      <StatusBar style="auto" />
    </View>
  );
}
// View Component
// The most fundamental component for building a UI, View is a container that supports
// layout with flexbox, style, some touch handling, and accessibility controls. View maps
//  directly to the native view equivalent on whatever platform React Native is running on,
//   whether that is a UIView, <div>, android.view, etc.
