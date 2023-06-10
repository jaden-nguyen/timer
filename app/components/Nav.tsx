import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import * as Font from "expo-font";
import { useEffect } from "react";
import { PRIMARY_COLOR } from "../constants";

const Nav = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "town-80-text-medium": require("../assets/fonts/town-80-text-medium.ttf"),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={styles.Nav}>
      <View style={styles.container}>
        <Icon name="menu" size={moderateScale(20)} color="white" />
        <Text style={styles.fastlane}>fastlane</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Nav: {
    height: verticalScale(90),
    backgroundColor: PRIMARY_COLOR,
  },
  container: {
    marginTop: verticalScale(60),
    width: "90%",
    flexDirection: "row",
    marginLeft: horizontalScale(30),
    gap: moderateScale(10),
  },
  fastlane: {
    fontWeight: moderateScale(50),
    fontFamily: "town-80-text-medium",
    color: "white",
    marginTop: 0,
    fontSize: verticalScale(20),
  },
  button: {
    right: 0,
    width: moderateScale(85),
    height: moderateScale(25),
    position: "absolute",
    marginRight: horizontalScale(25),
    borderRadius: moderateScale(25),
    borderColor: "white",
    borderWidth: moderateScale(1),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    lineHeight: verticalScale(20),
    fontFamily: "Calibri",
    overflow: "hidden",
    fontSize: moderateScale(13),
    letterSpacing: horizontalScale(1.5),
  },
});
export default Nav;
