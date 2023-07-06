import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/AntDesign";
import { useState, useEffect } from "react";
import { PRIMARY_COLOR } from "../constants";
import { useStore } from "../store";

let initial = true;

const Timer = () => {
  const [min, setMin] = useState([0, 0]);
  const [allow, setAllow] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const { pause, updateTime } = useStore();

  const loadFonts = async () => {
    await Font.loadAsync({
      "town-80-text-medium": require("../assets/fonts/town-80-text-medium.ttf"),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    if (!pause) {
      initial = false;
      if (seconds == 0) {
        setTimeout(() => {
          setSeconds(60);
        }, 1000);
      } else {
        setTimeout(() => {
          setSeconds(seconds);
        }, 1000);
      }
      const interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [pause]);

  const handlePressIncrease = () => {
    setAllow(true);
    if (min[1] >= 9) {
      setMin([min[0] + 1, 0]);
    } else {
      setMin([min[0], min[1] + 1]);
    }
  };

  const handlePressDecrease = () => {
    if (min[1] == 0) {
      setMin([min[0] - 1, 9]);
    } else {
      setMin([min[0], min[1] - 1]);
    }

    if (min[0] == 0 && min[1] - 1 == 0) {
      setAllow(false);
      return;
    }
  };

  return (
    <View style={styles.container}>
      {pause && (
        <TouchableOpacity style={styles.iconUp} onPress={handlePressIncrease}>
          <Icon name="caretup" size={moderateScale(45)} />
        </TouchableOpacity>
      )}
      {initial ? (
        <Text style={[styles.timer, { color: "#808080" }]}>
          {min[0]}
          {min[1]}:{seconds}
          {seconds}
        </Text>
      ) : (
        <Text style={[styles.timer, { color: PRIMARY_COLOR }]}>
          {min[0]}
          {min[1]}:{seconds}
        </Text>
      )}
      {allow && pause && (
        <TouchableOpacity style={styles.iconDown} onPress={handlePressDecrease}>
          <Icon name="caretdown" size={moderateScale(45)} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(100),
    paddingTop: verticalScale(100),
    paddingBottom: verticalScale(200),
    alignItems: "center",
  },
  timer: {
    fontFamily: "town-80-text-medium",
    fontSize: moderateScale(90),
    fontWeight: "500",
    letterSpacing: moderateScale(3.5),
  },
  iconUp: {
    right: horizontalScale(228),
    top: verticalScale(70),
    position: "absolute",
  },
  iconDown: {
    right: horizontalScale(225),
    top: verticalScale(190),
    position: "absolute",
  },
});
export default Timer;
