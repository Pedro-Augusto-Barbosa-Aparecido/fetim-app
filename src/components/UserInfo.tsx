import { HStack, Text, VStack, IBoxProps } from "native-base";
import { Avatar } from "./Avatar";

type Props = IBoxProps;

export function UserInfo({ ...rest }: Props) {
  return (
    <HStack pl={8} mt={6} {...rest}>
      <Avatar
        size={20}
        mr={4}
        uri={"https://github.com/Pedro-Augusto-Barbosa-Aparecido.png"}
      />
      <VStack justifyContent="center">
        <Text
          fontFamily="Roboto_700Bold"
          fontSize={18}
          color="white"
          lineHeight={21}
        >
          Olá, Bem-vindo Pedro
        </Text>
        <Text fontFamily="mono" fontSize={12} color="white" lineHeight={14}>
          Ciências da computação
        </Text>
      </VStack>
    </HStack>
  );
}
