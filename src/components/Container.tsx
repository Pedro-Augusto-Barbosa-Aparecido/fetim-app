import { VStack, IBoxProps } from "native-base";

type Props = IBoxProps & {};

export function Container({ children, ...rest }: Props) {
  return (
    <VStack bgColor="green.500" flex={1} {...rest}>
      {children}
    </VStack>
  );
}
