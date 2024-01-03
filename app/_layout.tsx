import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { LoadAssets } from "../components/LoadAssets";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <LoadAssets>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName="[uuid]">
          <Stack.Screen name="[uuid]" options={{ headerTitle: "" }} />
        </Stack>
      </ThemeProvider>
    </LoadAssets>
  );
}
