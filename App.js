import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/customButton/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome Here!</Text>
          {/* use platform file extensions like '.ios' and '.android' for larger parts of the app */}
          <CustomButton title="PressMe" onPress={() => alert("Pressed")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0, // OS is for smaller parts
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      // select is for smaller parts of the app
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
