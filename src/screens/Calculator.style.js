import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  subTitle: {
    fontWeight: "500",
    fontSize: 15,
  },
  calcView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 30,
    paddingBottom: 10,
    borderBottomColor: "#000",
  },
  btnView: {
    flex: 2,
  },
  screenSecondNumber: {
    fontSize: 40,
    color: "#747477",
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
  },

  // Button
  calculatorBtn: {
    flex: 1,
    height: 87,
    justifyContent: "center",
    alignItems: "center",
  },
  operatorColor: {
    fontSize: 32,
    color: "#F6635C",
  },
  numberColor: {
    fontSize: 32,
    color: "black",
  },
});

export default Styles;
