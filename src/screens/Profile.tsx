import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Heading,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { useContext, useState } from "react";

import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

export const SIZE_OF_CAMERA = 48;
export const CAMERA_CONTROLS_SIZE = 24;

export function Profile() {
  const [avatarUri, setAvatarUri] = useState(
    "https://github.com/Pedro-Augusto-Barbosa-Aparecido.png"
  );

  const { handleSignOut } = useContext(AuthContext);
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  async function handleOpenGallery() {
    const photoInfo = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
    });

    if (photoInfo.canceled || !photoInfo.assets[0].uri) {
      return;
    }

    setAvatarUri(photoInfo.assets[0].uri);
  }

  return (
    <VStack bgColor="gray.900" flex={1}>
      <Header title="Configurações" onPressMenuIcon={() => goBack()} />

      <Center mt={24}>
        <Center position="relative">
          <Avatar size={40} borderColor="green.500" uri={avatarUri} />
          <Pressable
            onPress={handleOpenGallery}
            bgColor="green.500"
            p={2}
            rounded="full"
            position="absolute"
            top="32"
            right="3.5"
          >
            <Center>
              <MaterialIcons
                name="add-a-photo"
                size={16}
                color={colors.white}
              />
            </Center>
          </Pressable>
        </Center>
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
