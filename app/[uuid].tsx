import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ReImage } from "../components/Image";

export default function Viewer() {
  const { uuid } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: uuid });
  }, [uuid]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ReImage />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
