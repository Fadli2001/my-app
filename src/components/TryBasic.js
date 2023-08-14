import { Image, StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function TryBasic() {
  return (
    <ScrollView>
      <Text style={styles.titleText}>Introduction React Native Component</Text>
      <Text style={styles.subTitle}>1. This is Text Component</Text>
      <Text style={styles.parentText}>
        i'm Ronald as a parent Text,
        {"\n"}
        <Text style={{ backgroundColor: "blue" }}>
          and here, call me child text
        </Text>
      </Text>

      <Text style={styles.subTitle}>2. View</Text>
      <Text>
        What is View Component ?? {"\n"}
        <Text>
          View is a container that supports layout with flexbox, style, some
          touch handling, and accessibility controls
        </Text>
      </Text>

      <Text>View Component as the below :{"\n"}</Text>

      <View style={{ width: 100, height: 100, backgroundColor: "#00a8f3" }}>
        <Text>Square - 1</Text>
      </View>
      <View style={{ width: 150, height: 100, backgroundColor: "#ff6400" }}>
        <Text>Square - 2</Text>
      </View>
      <View style={{ width: 200, height: 100, backgroundColor: "#5b6a87" }}>
        <Text>Square - 3</Text>
      </View>

      <Text style={styles.subTitle}>3. Image</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/enigma-logo.png")}
          resizeMode="contain"
        ></Image>
      </View>

      <Text style={styles.subTitle}>4. Text Input</Text>
      <Text>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Input Full Name"
      />
       <Text>NIM</Text>
      <TextInput
        style={styles.input}
        placeholder="Input NIM"
        keyboardType="numeric"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  parentText: {
    backgroundColor: "red",
    color: "#fff",
    marginBottom: 15,
    padding: 5,
  },
  content: {
    textIndent: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  image: {
    width: windowWidth * 0.6,
    marginTop: 50,
    // aspectRatio: 2, // Maintain the aspect ratio of the image
  },
  input : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
