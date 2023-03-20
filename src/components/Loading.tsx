import { Center, Spinner } from "native-base";

export function LoadingScreen() {
  return (
    <Center flex={1} bgColor="gray.900" color="gray.900">
      <Spinner color="green.500" />
    </Center>
  );
}
