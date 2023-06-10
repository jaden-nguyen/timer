import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import Icon from "react-native-vector-icons/Ionicons";
import Back from "react-native-vector-icons/Entypo";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../constants";
import { useStore } from "../store";

const pause_button = "pause-circle-sharp";
const play_button = "play-circle";

const Actions = () => {
  const { pause, handlePlaying, time } = useStore();

  return (
    <View>
      <View style={styles.media}>
        <Icon name="stop-outline" size={25} />
        <TouchableOpacity onPress={handlePlaying}>
          {pause ? (
            <Icon
              style={styles.control}
              name={play_button}
              size={45}
              color={PRIMARY_COLOR}
            />
          ) : (
            <Icon
              style={styles.control}
              name={pause_button}
              size={45}
              color={PRIMARY_COLOR}
            />
          )}
        </TouchableOpacity>
        <Back name="back" size={25} />
      </View>
      <View style={styles.loading}>
        <Text>{time}</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
        </View>
        <Text>00:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flexDirection: "row",
    gap: horizontalScale(17),
    justifyContent: "center",
    padding: verticalScale(10),
    margin: verticalScale(20),
  },
  control: {
    lineHeight: verticalScale(25),
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    gap: horizontalScale(5),
  },
  progressContainer: {
    width: "50%",
    backgroundColor: BACKGROUND_COLOR,
    marginTop: verticalScale(6),
    height: verticalScale(8),
    borderRadius: moderateScale(4),
    overflow: "hidden",
  },
  progressBar: {
    width: "60%",
    height: verticalScale(8),
    backgroundColor: PRIMARY_COLOR,
  },
});

export default Actions;
