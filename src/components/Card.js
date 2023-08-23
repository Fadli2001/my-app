import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ price, stock, discount, children }) {
  const unavailable = stock == 0 ? true : false;
  const imageChildren = children
  return (
    <View style={styles.card}>
      {imageChildren}
      
      {/* <Image
        style={styles.cardImage}
        source={{
            uri : imgUrl
        }}
      /> */}
{/* 
      <Image
        source={{ uri: `${API_IMAGE_URI}/t/p/w500/${item.poster_path}` }}
        style={styles.posterImage}
      /> */}

      <View style={styles.cardContent}>
        <View style={styles.priceStockContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Rp. <Text style={styles.boldPrice}>{price}</Text>
            </Text>
          </View>
          <View style={styles.stockContainer}>
            <Text style={styles.stockText}>Stock {stock}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.overlay,
          unavailable
            ? {
                top: 0,
                left: 0,
                right: 0,
                bottom: 35,
                backgroundColor: "rgba(59, 56, 56, 0.7)",
              }
            : { top: 0, left: 100, right: 0, bottom: 155 },
        ]}
      >
        {unavailable ? (
          <View>
            <Text style={styles.unavailbleText}>Habis </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.discountText}>{discount}% </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    width: 140,
    marginHorizontal: 3,
    backgroundColor: "white",
    display: "flex",
    overflow: "hidden",
  },  
  cardContent: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#f3f6f4",
  },
  priceStockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 15,
    color: "#F94C10",
    paddingLeft: 7,
  },
  boldPrice: {
    fontWeight: "bold",
    fontSize: 20,
  },
  stockText: {
    color: "#B9B4C7",
    fontWeight: "500",
    alignSelf: "flex-end",
    padding: 5,
    backgroundColor: "orange",
    borderBottomRightRadius: 15,
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 100,
    right: 0,
    bottom: 155,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  unavailbleText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
