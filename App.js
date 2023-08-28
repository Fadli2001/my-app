import { SafeAreaView,StatusBar } from "react-native";
import FlatListExample from "./src/components/FlatListExample";

export default function App() {
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}  
    >
      {/* <Counter /> */}
      {/* <Greetings/> */}
      {/* <FlashSale/>        */}
      {/* <LearnList/> */}
      <FlatListExample/>
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

// View Component
// The most fundamental component for building a UI, View is a container that supports
// layout with flexbox, style, some touch handling, and accessibility controls. View maps
//  directly to the native view equivalent on whatever platform React Native is running on,
//   whether that is a UIView, <div>, android.view, etc.
