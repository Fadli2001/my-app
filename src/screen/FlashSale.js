import {
    Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Card from "../components/Card";

export default function FlashSale() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Flash{" "}
          <Text style={{ color: "orange", fontWeight: "400" }}>Shale</Text>
        </Text>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.cardSection}
        >
          <Card price={40000} discount={30} stock={20}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/jaket-pria.jpg')}
            />
          </Card>
          <Card price={15000} discount={25} stock={0}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/topi-wanita.jpeg')}
            />
          </Card>
          <Card price={60000} discount={15} stock={10}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/jaket-wanita.webp')}
            />
          </Card>
          <Card price={51200} discount={20} stock={7}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/kaos-wanita.jpg')}
            />
          </Card>
          <Card price={32100} discount={25} stock={9}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/kaos-pria.jpeg')}
            />
          </Card>
          <Card price={67000} discount={45} stock={0}>
            <Image 
              style={styles.cardImage}
              source={require('../assets/spatu-vans.jpeg')}
            />
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    padding: 9,
    color: "red",
    fontSize: 20,
  },
  cardSection: {
    height: 190,
    display: "flex",
    padding: 2,
    flexDirection: "row",
  },
  cardImage: {
    height: 150,
    width: "100%",
  },
});
