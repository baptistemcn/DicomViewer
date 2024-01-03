import { useFonts } from "expo-font";
import { ReactNode, useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface LoadAssetsProps {
  children: ReactNode;
}

type Fonts = { [key: string]: string };

const fontsPaths: Fonts = {
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
};

export const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [loaded] = useFonts({
    ...fontsPaths,
    ...FontAwesome.font,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loaded) {
      setIsLoading(false);
    }
  }, [loaded]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};
