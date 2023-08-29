import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProductDummy from "../utils/ProductDummy";



const Products = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity style={[{ backgroundColor }]} onPress={onPress}>
    <View style={styles.item}>
      <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
      <Text style={{ color: textColor }}>Category: {item.category}</Text>
      <Text style={{ color: textColor }}>Price: {item.price} IDR</Text>
      <Text style={{ color: textColor }}>Rate: {item.rate}</Text>
    </View>
  </TouchableOpacity>
);

export default function FlatListExample() {
  const [selectedId, setSelectedId] = useState();

  const renderProducts = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#767474" : "white";
    const textColor = item.id === selectedId ? "white" : "black";
    return (
      <Products
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={ProductDummy}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
