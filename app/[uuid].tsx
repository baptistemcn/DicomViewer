import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image } from "expo-image";
import { useEffect } from "react";
import { View } from "react-native";

import main from "../assets/images/main.png";

export default function Viewer() {
  const { uuid } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: uuid });
  }, [uuid]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Text>{uuid}</Text> */}
      <Image
        source={main}
        style={{ height: "100%", width: "100%", backgroundColor: "red" }}
      />
    </View>
  );
}
