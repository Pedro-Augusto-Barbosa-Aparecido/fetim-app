import { Heading, Text, VStack } from "native-base";

import Animated, { SlideInDown } from "react-native-reanimated";
import { Button } from "../components/Button";

import { useNavigation } from "@react-navigation/native";

export function EntryScreen() {
  const { navigate } = useNavigation();

  return (
    <VStack bgColor="gray.900" flex={1} direction="column-reverse">
      <Animated.View
        className="bg-gray-200 flex-1 max-h-96 w-full rounded-t-[36px] items-start justify-start px-6 py-11"
        entering={SlideInDown.delay(0).duration(1000)}
      >
        <Heading mb={29} fontFamily="heading" fontSize={26} lineHeight={30}>
          Bem-vindo
        </Heading>
        <Text
          mb={43}
          maxW={258}
          fontFamily="body"
          fontSize={14}
          lineHeight={16}
        >
          Essa é a área onde você podera vê suas aulas, notas e notificações
          acadêmicas
        </Text>
        <Button onPress={() => navigate("login")} w="full" title="Logar" />
      </Animated.View>
    </VStack>
  );
}
