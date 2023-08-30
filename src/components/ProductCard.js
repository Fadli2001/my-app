import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ProductCard({
  imgUrl,
  name,
  price,
  rate,
  terjual,
  discount, 
}) {
  return (
    <View style={styles.card}>
      <View>
        <Image          
          source={{ uri: imgUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rp{price}</Text>
        <Text style={styles.rate}>Rating: {rate}</Text>
        <Text style={styles.rate}>Terjual({terjual})</Text>
        <View style={styles.discountSec}>
          <Text style={styles.discountText}>HEMAT {(discount*price/100)*1000}</Text>
          <Text style={styles.discountText}>Diskon {discount*100}%</Text>
        </View>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10,
    // backgroundColor : 'blue',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ff4800",
  },
  rate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 7,
  },
  discountSec: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discountText: {
    padding: 5,
    height: 23,
    backgroundColor: "#edcbbe",
    fontSize: 12,
    borderRadius: 7,
  },
});
