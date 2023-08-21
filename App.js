import { SafeAreaView, StatusBar } from "react-native";
import Counter from "./src/screen/Counter";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Counter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// View Component
// The most fundamental component for building a UI, View is a container that supports
// layout with flexbox, style, some touch handling, and accessibility controls. View maps
//  directly to the native view equivalent on whatever platform React Native is running on,
//   whether that is a UIView, <div>, android.view, etc.
