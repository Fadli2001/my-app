import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("Makanan"); // Default category is 'Makanan'

  // Mengelompokkan produk berdasarkan kategori
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

  // Filter produk berdasarkan kategori yang dipilih
  const filteredSections = sections.filter(
    (section) => section.title === selectedCategory
  );

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => setSelectedCategory("Makanan")}>
          <Text>Makanan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("Minuman")}>
          <Text>Minuman</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={filteredSections}
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
