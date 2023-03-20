import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import { useState } from "react";

type Props = Omit<IButtonProps, "onPressIn" | "onPressOut"> & {
  title: string;
  bgColor?: string;
};

export function Button({ title, bgColor = "green.500", ...rest }: Props) {
  const [textColor, setTextColor] = useState<string>("white");

  function handlePressButtonAndChangeTextColor() {
    setTextColor(textColor === "white" ? bgColor : "white");
  }

  return (
    <NativeBaseButton
      w={328}
      h={47}
      bgColor="green.500"
      rounded={12}
      borderWidth={2}
      borderColor="green.500"
      _pressed={{
        backgroundColor: "gray.200",
      }}
      backgroundColor={bgColor}
      {...rest}
      onPressIn={handlePressButtonAndChangeTextColor}
      onPressOut={handlePressButtonAndChangeTextColor}
    >
      <Text fontFamily={"heading"} color={textColor} fontSize={16}>
        {title}
      </Text>
    </NativeBaseButton>
  );
}
