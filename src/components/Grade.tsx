import { useState } from "react";

import {
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { Entypo } from "@expo/vector-icons";
import { CaretDown, CaretUp } from "phosphor-react-native";

import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
} from "react-native-reanimated";

interface Props {
  classroom: string;
  subject: string;
}

export function Grade({ classroom, subject }: Props) {
  const [showGrades, setShowGrades] = useState<boolean>(false);

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
      {/* <HStack py={3} px={4} rounded="xl" mt={2} bgColor="gray.700">
        <Text fontFamily="mono" fontSize={14} lineHeight={16} color="gray.200">
          Avaliação
        </Text>
        <Spacer />
        <Entypo name="minus" size={16} color={colors.gray[200]} />
      </HStack> */}
      <Pressable onPress={() => setShowGrades((oldState) => !oldState)}>
        <HStack
          py={3}
          px={4}
          rounded="xl"
          mt={2}
          bgColor={showGrades ? "gray.700" : "gray.100"}
        >
          <Text
            fontFamily="mono"
            fontSize={14}
            lineHeight={16}
            color={showGrades ? "gray.100" : "gray.700"}
          >
            Notas
          </Text>
          <Spacer />
          {showGrades ? (
            <CaretUp weight="fill" size={16} color={colors.gray[100]} />
          ) : (
            <CaretDown weight="fill" size={16} color={colors.gray[800]} />
          )}
        </HStack>
      </Pressable>
      {showGrades && (
        <Animated.View
          className="h-fit w-full bg-gray-100 flex flex-col mt-2 rounded-xl p-4"
          entering={SlideInLeft.delay(0).duration(1000)}
        >
          {new Array(2).fill(0).map((_, index) => {
            return (
              <HStack flex={1} key={index} alignItems="center" mb={2}>
                <Text fontWeight="semibold" fontFamily="body" fontSize="sm">
                  NP{index + 1}
                </Text>
                <Spacer />
                <Text fontWeight="bold" fontFamily="body" fontSize="sm">
                  <Entypo name="minus" size={12} color={colors.gray[700]} />
                </Text>
              </HStack>
            );
          })}
          <HStack flex={1} alignItems="center" mb={1} mt={4}>
            <Text fontWeight="bold" fontFamily="body" fontSize="md">
              Média
            </Text>
            <Spacer />
            <Text fontWeight="bold" fontFamily="body" fontSize="sm">
              <Entypo name="minus" size={12} color={colors.gray[700]} />
            </Text>
          </HStack>
          <HStack flex={1} alignItems="center">
            <Text fontWeight="bold" fontFamily="body" fontSize="md">
              Situação
            </Text>
            <Spacer />
            <Text fontWeight="bold" fontFamily="body" fontSize="sm">
              <Entypo name="minus" size={12} color={colors.gray[700]} />
            </Text>
          </HStack>
        </Animated.View>
      )}
    </VStack>
  );
}
