import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProductDummy from "../utils/ProductDummy";
import ProductCard from "./ProductCard";

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
      <View style={styles.headerSection}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory("Makanan")}
        >
          <Text style={styles.btnText}>Makanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setSelectedCategory("Minuman")}
        >
          <Text style={styles.btnText}>Minuman</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <SectionList
          sections={filteredSections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              rate={item.rate}
              terjual={item.terjual}
              discount={item.discount}
            />
          )}
          renderSectionHeader={({ section }) => (
            <View>
              <Text
                style={{ fontWeight: "bold", marginLeft: 20, fontSize: 23 }}
              >
                {section.title}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    marginBottom: 10,
    shadowColor: "#000", // Warna bayangan
    shadowOpacity: 0.4, // Kejernihan bayangan
    elevation: 5, // Hanya untuk platform Android
  },
  btn: {
    marginHorizontal: 15,
    backgroundColor: "#ededed",
    borderRadius: 9,
    padding: 7,
  },
});
