import { Heading, HStack, Spacer, Text, useTheme, VStack } from "native-base";

import { Entypo } from "@expo/vector-icons";
import { Minus } from "phosphor-react-native";

interface Props {
  classroom: string;
  subject: string;
}

export function Grade({ classroom, subject }: Props) {
  const { colors } = useTheme();

  return (
    <VStack mb={28}>
      <HStack w="full">
        <Heading
          lineHeight={16}
          fontSize={14}
          fontFamily="Roboto_700Bold"
          color="white"
        >
          {classroom} - {subject}
        </Heading>
        <Spacer />
        <Entypo name="bar-graph" size={16} color={colors.green[500]} />
      </HStack>
      <HStack py={3} px={4} rounded="xl" mt={2} bgColor="gray.700">
        <Text fontFamily="mono" fontSize={14} lineHeight={16} color="gray.200">
          Avaliação
        </Text>
        <Spacer />
        <Entypo name="minus" size={16} color={colors.gray[200]} />
      </HStack>
      <HStack py={3} px={4} rounded="xl" mt={2} bgColor="gray.100">
        <Text fontFamily="mono" fontSize={14} lineHeight={16} color="gray.700">
          Notas
        </Text>
        <Spacer />
        <Entypo name="minus" size={16} color={colors.gray[800]} />
      </HStack>
    </VStack>
  );
}
