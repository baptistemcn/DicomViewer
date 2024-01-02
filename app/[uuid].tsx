import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Viewer() {
  const { uuid } = useLocalSearchParams();

  return (
    <>
      <Text>{uuid}</Text>
    </>
  );
}
