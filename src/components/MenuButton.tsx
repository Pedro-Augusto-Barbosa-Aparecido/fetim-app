import {
  Center,
  Text,
  IBoxProps,
  Pressable,
  IPressableProps,
} from "native-base";
import React from "react";

interface Props extends IBoxProps {
  icon: React.ReactNode;
  title: string;
  navigateAction: () => void;
  variant?: "small" | "large";
  buttonProps?: Omit<
    IPressableProps,
    "onPress" | "onLongPress" | "onPressIn" | "onPressOut"
  >;
}

export function MenuButton({
  icon,
  title,
  variant = "large",
  buttonProps = {},
  navigateAction,
  ...rest
}: Props) {
  const HEIGHT = variant === "large" ? 94 : 20;
  const WIDTH = variant === "large" ? 107 : 24;

  return (
    <Pressable onPress={navigateAction} {...buttonProps}>
      <Center
        h={HEIGHT}
        w={WIDTH}
        bgColor="green.500"
        rounded="2xl"
        p={3}
        {...rest}
      >
        {icon}
        <Text
          fontSize={14}
          fontFamily="Roboto_700Bold"
          color="white"
          textAlign="center"
        >
          {title}
        </Text>
      </Center>
    </Pressable>
  );
}
