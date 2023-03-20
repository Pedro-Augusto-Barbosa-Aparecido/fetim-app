import { StatusBar } from "react-native";

import { HStack, Pressable, Text, useTheme } from "native-base";
import { ArrowLeft } from "phosphor-react-native";

type Props = { title: string; onPressMenuIcon?: () => void };

export function Header({ title, onPressMenuIcon = () => {} }: Props) {
  const { colors } = useTheme();

  const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;
  const HEADER_HEIGHT = 49 + STATUS_BAR_HEIGHT;

  return (
    <HStack
      bgColor="green.500"
      h={HEADER_HEIGHT}
      w="full"
      alignItems="center"
      px={5}
      style={{
        paddingTop: STATUS_BAR_HEIGHT,
      }}
    >
      <Pressable onPress={onPressMenuIcon}>
        <ArrowLeft size={24} weight="bold" color={colors.white} />
      </Pressable>
      <Text
        ml={2}
        fontFamily="heading"
        fontSize={17}
        lineHeight={20}
        color="white"
      >
        {title}
      </Text>
    </HStack>
  );
}
