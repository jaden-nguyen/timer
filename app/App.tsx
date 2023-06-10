import { StyleSheet, View } from "react-native";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Timer from "./components/Timer";
import Actions from "./components/Actions";
import { BACKGROUND_COLOR } from "./constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <View style={styles.background}>
        <Title />
        <Timer />
      </View>
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    backgroundColor: BACKGROUND_COLOR,
  },
});
