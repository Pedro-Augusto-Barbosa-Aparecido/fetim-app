import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Text, VStack } from "native-base";

import { useContext } from "react";

import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { AuthContext } from "../context/AuthContext";

export function ConfigScreen() {
  const { handleSignOut } = useContext(AuthContext);
  const { goBack } = useNavigation();

  return (
    <VStack bgColor="gray.900" flex={1}>
      <Header title="Configurações" onPressMenuIcon={() => goBack()} />
      <Center mt={24}>
        <Avatar
          size={40}
          uri="https://s3-alpha-sig.figma.com/img/897b/1a92/70bdd764a2be6b66b9a6cade8c109b83?Expires=1679875200&Signature=Bzk32NlztnbnwyGyWLjqnknlE0FRqocmtJGvhy2BIBlhcCjKq761oW-1yxcAb9uc0LRpNMa2ZKWtYAvUKETu28cSQFB07qEhkgrV7kXODsOSlxdQ6lnhbsGfDpMZvRrdmvIH3xFwZjrE-I9fYsVbvYlUtVW4H9qeMdZeJ45DR9vjFAiRC9p5yOrS59Z0tomekkjNGE3TXO~gq6OSicQarRsdaGGN1lhpgRyYxFj3jDDRY-8qnMXO-NaVChEjuPbYdAUw7Z0KK8U3qXUun5yj8mkrgbAupl4EHhU6tJqO4IABuFxVZzG7hkjIq49ZrG7eK7OMIDt~qb73XNwO69qaow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Heading
          my={11}
          color="white"
          fontFamily="Roboto_700Bold"
          fontSize={20}
        >
          Olá, Pedro Augusto
        </Heading>
        <Text fontFamily="mono" fontSize={12} color="white" lineHeight={14}>
          Ciências da Computação
        </Text>
        <VStack mt={12}>
          <Button maxW={56} title="Light Mode" mb={4} />
          <Button maxW={56} title="Support" mb={4} />
          <Button
            maxW={56}
            title="Log Out"
            bgColor="red.500"
            borderColor="red.500"
            onPress={handleSignOut}
          />
        </VStack>
      </Center>
    </VStack>
  );
}
