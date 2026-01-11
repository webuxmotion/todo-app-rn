import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>TODO</Text>
      <Text>TODO</Text>

      <Text style={styles.content}>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 52,
    borderWidth: 3,
    borderColor: "black",
  }
})