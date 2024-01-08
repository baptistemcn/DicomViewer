import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Error } from "../components/Error";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <View>
          <Error />
        </View>
        <View>
          <Text style={styles.text}>Impossible d'ouvrir cette image.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    gap: 30,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
