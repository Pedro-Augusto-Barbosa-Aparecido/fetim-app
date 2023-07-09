import { Center, Spinner, Text } from "native-base";

type Props = {
  message?: string;
};

export function LoadingScreen({ message }: Props) {
  return (
    <Center flex={1} bgColor="gray.900" color="gray.900">
      <Spinner color="green.500" />
      <Text color="gray.300" mt={6} fontFamily="Roboto_700Bold" fontSize={16}>
        {message}
      </Text>
    </Center>
  );
}
