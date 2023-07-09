import {
  Modal,
  IModalProps,
  Heading,
  HStack,
  useTheme,
  VStack,
  Center,
  Text,
} from "native-base";
import { Camera, Image, X } from "phosphor-react-native";
import { Pressable } from "react-native";

type Props = IModalProps & {
  onPressCameraButton?: () => Promise<void>;
  onPressGalleryButton?: () => Promise<void>;
};

export const ICON_CONTAINER_SIZE = 10;

export function ChooseCameraOrGalleryModal({
  onPressCameraButton,
  onPressGalleryButton,
  onClose,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <Modal onClose={onClose} {...rest}>
      <Modal.Content maxW={300}>
        <Modal.Body bg="gray.800">
          <HStack justifyContent="space-between">
            <Heading color="gray.300" fontSize="md">
              Foto do perfil
            </Heading>
            <Pressable onPress={onClose}>
              <X size={20} color={colors.red[500]} />
            </Pressable>
          </HStack>
          <Center mt={5}>
            <HStack>
              <VStack mr={5}>
                <Pressable onPress={onPressCameraButton}>
                  <Center
                    borderWidth={1}
                    borderColor="green.500"
                    w={ICON_CONTAINER_SIZE}
                    h={ICON_CONTAINER_SIZE}
                    rounded="full"
                  >
                    <Camera size={20} color={colors.green[500]} />
                  </Center>
                  <Text color="gray.200" fontSize="xs" mt={1}>
                    Camera
                  </Text>
                </Pressable>
              </VStack>
              <VStack>
                <Pressable onPress={onPressGalleryButton}>
                  <Center
                    borderWidth={1}
                    borderColor="green.500"
                    w={ICON_CONTAINER_SIZE}
                    h={ICON_CONTAINER_SIZE}
                    rounded="full"
                  >
                    {/* eslint-disable-next-line */}
                  <Image size={20} color={colors.green[500]} />
                  </Center>
                  <Text color="gray.200" fontSize="xs" mt={1}>
                    Galeria
                  </Text>
                </Pressable>
              </VStack>
            </HStack>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
