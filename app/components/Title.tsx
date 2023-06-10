import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../constants";
import { moderateScale, verticalScale } from "../scales";
import * as Font from "expo-font";
import { useEffect } from "react";

const Title = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "town-80-text-medium": require("../assets/fonts/town-80-text-medium.ttf"),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer title</Text>
      <Text style={styles.subtitle}>Timer description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: verticalScale(30),
    alignItems: "center",
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: moderateScale(39),
    fontFamily: "town-80-text-medium",
  },
  subtitle: {
    fontSize: moderateScale(17),
  },
});
export default Title;
