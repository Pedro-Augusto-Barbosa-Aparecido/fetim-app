import { HStack, Text, VStack, IBoxProps } from "native-base";
import { Avatar } from "./Avatar";

type Props = IBoxProps & {};

export function UserInfo({ ...rest }: Props) {
  return (
    <HStack pl={8} mt={6} {...rest}>
      <Avatar
        size={20}
        mr={4}
        uri="https://s3-alpha-sig.figma.com/img/897b/1a92/70bdd764a2be6b66b9a6cade8c109b83?Expires=1679875200&Signature=Bzk32NlztnbnwyGyWLjqnknlE0FRqocmtJGvhy2BIBlhcCjKq761oW-1yxcAb9uc0LRpNMa2ZKWtYAvUKETu28cSQFB07qEhkgrV7kXODsOSlxdQ6lnhbsGfDpMZvRrdmvIH3xFwZjrE-I9fYsVbvYlUtVW4H9qeMdZeJ45DR9vjFAiRC9p5yOrS59Z0tomekkjNGE3TXO~gq6OSicQarRsdaGGN1lhpgRyYxFj3jDDRY-8qnMXO-NaVChEjuPbYdAUw7Z0KK8U3qXUun5yj8mkrgbAupl4EHhU6tJqO4IABuFxVZzG7hkjIq49ZrG7eK7OMIDt~qb73XNwO69qaow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
