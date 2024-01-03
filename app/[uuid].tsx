import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo } from "react";
import { Text } from "react-native";

export default function Viewer() {
  const { uuid } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: uuid });
  }, [uuid]);

  return (
    <>
      <Text>{uuid}</Text>
    </>
  );
}
