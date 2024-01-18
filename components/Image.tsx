import React from "react";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import hand from "../assets/images/main.png";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const { width, height } = Dimensions.get("window");

export const ReImage = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const lastScale = useSharedValue(1);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onStart: () => {
        lastScale.value = scale.value;
      },
      onActive: (event) => {
        const nextScale = event.scale * lastScale.value;

        const newWidth = width * nextScale;
        const newHeight = height * nextScale;

        if (newWidth >= width && newHeight >= height) {
          scale.value = withSpring(
            nextScale,
            { stiffness: 100, damping: 10, mass: 1 },
            (scaled) =>
              typeof scaled === "number"
                ? Math.min(5, Math.max(0.5, scaled))
                : scaled
          );
        }
      },
      onEnd: () => {
        lastScale.value = scale.value;
      },
    });

  const panHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number; startY: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {},
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panHandler}>
      <Animated.View style={{ flex: 1 }}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <AnimatedImage
            source={hand}
            style={[{ flex: 1, height, width }, rStyle]}
          />
        </PinchGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};
