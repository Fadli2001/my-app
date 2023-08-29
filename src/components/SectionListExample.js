import { StyleSheet, Text, View, SectionList } from "react-native";
import React from "react";
import ProductDummy from "../utils/ProductDummy";

const cars = [
  {
    brand: "Toyota",
    data: ["Camry", "Corolla", "RAV4", "Hilux", "Prius"],
  },
  {
    brand: "Honda",
    data: ["Civic", "C-RV", "Accord", "Jazz"],
  },
  {
    brand: "Nissan",
    data: ["Altima", " Maxima", "Sentra", "Rogue", "Frontier"],
  },
  {
    brand: "Yamaha",
    data: ["YZF-R1", " MT-07", "FZ6", "VMAX", "YZF-R6"],
  },
];

export default function SectionListExample() {
  const groupedProducts = ProductDummy.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Mengkonversi objek yang telah dikelompokkan menjadi bentuk array untuk SectionList
  const sections = Object.keys(groupedProducts).map((category) => ({
    title: category,
    data: groupedProducts[category],
  }));
  return (
    <View>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Rating: {item.rate}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "lightgray", padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
