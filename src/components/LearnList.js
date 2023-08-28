import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Cars() {
  const cars = [
    {
      name: "Camry",
      brand: "Toyota",
    },
    {
      name: "Corolla",
      brand: "Toyota",
    },
    {
      name: "Civic",
      brand: "Honda",
    },
    {
      name: "C-RV",
      brand: "Honda",
    },
    {
      name: "Altima",
      brand: "Nissan",
    },
    {
      name: "Maxima",
      brand: "Nissan",
    },
    {
      name: "Civic",
      brand: "Honda",
    },
    {
      name: "GT",
      brand: "Ford Mustang",
    },
    {
      name: "Mach-E",
      brand: "Ford Mustang",
    },
  ];

  const filterCars = cars.filter(car => car.brand === 'Honda' || car.brand === 'Nissan')

  const listCars = filterCars.map((car, index) => (
    <View key={index}
      style={{
        paddingLeft: 10,
      }}
    >
      <Text>Name : {car.name}</Text>
      <Text>Brand : {car.brand}</Text>
      <Text></Text>
    </View>
  ));

  return <View>{listCars}</View>;
}

export default function LearnList() {
  const brands = [
    "suzuki",
    "toyoya",
    "daihatsu",
    "honda",
    "mitsubishi",
    "yamaha",
    "nissan",
  ];
  const listBrands = brands.map((brand, index) => (
    <View style={styles.cardBrand} key={index}>
      <Text style={styles.brandText}>{brand}</Text>
    </View>
  ));
  return (
    <View style={styles.container}>
      <Text style={[styles.brand, { fontWeight: "bold", paddingLeft: 10 }]}>
        Brands
      </Text>
      <View style={styles.brandSection}>{listBrands}</View>
      <Cars />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  brandSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 7,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
  cardBrand: {
    height: 86,
    width: 86,
    borderWidth: 1,
    borderColor: "blueviolet",
    backgroundColor: "white",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  brandText: {
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "bold",
  },
});
