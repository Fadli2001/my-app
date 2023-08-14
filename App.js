import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{padding:20}}>      
      <Text>Hello World!</Text>
      <Text>Hello Enigmanians</Text>
      <View style={{ width: 100, height: 100, backgroundColor: '#00a8f3' }}>
        <Text>Square - 1</Text>
      </View>
      <View style={{ width: 150, height: 100, backgroundColor: '#ff6400' }}>
      <Text>Square - 2</Text>
      </View>
      <View style={{ width: 200, height: 100, backgroundColor: '#5b6a87' }}>
      <Text>Square - 3</Text>
      </View>
      <StatusBar style="auto" />  
    </View>
  );
}
// View Component
// The most fundamental component for building a UI, View is a container that supports 
// layout with flexbox, style, some touch handling, and accessibility controls. View maps
//  directly to the native view equivalent on whatever platform React Native is running on,
//   whether that is a UIView, <div>, android.view, etc.

