import { useCallback, useEffect, useRef, useState } from "react";

import { Camera, CameraType } from "expo-camera";
import { Center, Pressable, useTheme } from "native-base";

import { Camera as CameraIcon, CameraRotate, X } from "phosphor-react-native";

import Animated, { SlideInDown } from "react-native-reanimated";

import * as MediaLibrary from "expo-media-library";
import { LoadingScreen } from "../components/Loading";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ALBUM_APP_NAME } from "../lib/constants";

export const CAMERA_CONTROLS_SIZE = 24;

type CameraScreenParams = {
  keyOnAsyncStorage: string;
};

export function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [sideOfCamera, setSideOfCamera] = useState<CameraType>(CameraType.back);

  const [cameraPermissions] = Camera.useCameraPermissions();
  const [mediaLibraryPermissions] = MediaLibrary.usePermissions();

  const route = useRoute();
  const { goBack, navigate, canGoBack } = useNavigation();
  const { colors } = useTheme();

  const { keyOnAsyncStorage } = route.params as CameraScreenParams;

  const cameraRef = useRef<Camera>(null);

  async function getCameraAndMediaLibraryPermissions() {
    const cameraPermissionsResponse =
      await Camera.requestCameraPermissionsAsync();
    const mediaLibraryPermissionsReposnse =
      await MediaLibrary.requestPermissionsAsync();

    const hasPermissionToTakeAPictureAndSaveIt =
      cameraPermissionsResponse.granted &&
      mediaLibraryPermissionsReposnse.granted;

    return hasPermissionToTakeAPictureAndSaveIt;
  }

  async function handleFlipCamera() {
    if (sideOfCamera === CameraType.back) {
      return setSideOfCamera(CameraType.front);
    }

    setSideOfCamera(CameraType.back);
  }

  const handleCancelCamera = useCallback(async () => {
    if (canGoBack()) {
      return goBack();
    }

    navigate("home");
  }, [canGoBack, goBack, navigate]);

  async function handleTakePicture() {
    if (!cameraRef.current) {
      return;
    }

    try {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);

      if (photo.uri) {
        // const asset = await MediaLibrary.createAssetAsync(photo.uri);
        // const album = await MediaLibrary.getAlbumAsync(ALBUM_APP_NAME);
        // console.log(album);
        // console.log(asset);
        // await MediaLibrary.saveToLibraryAsync(photo.uri);
        // if (!album) {
        //   await MediaLibrary.createAlbumAsync(ALBUM_APP_NAME, asset);
        // } else {
        //   await MediaLibrary.addAssetsToAlbumAsync(asset, album);
        // }
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (!cameraPermissions?.granted || !mediaLibraryPermissions?.granted) {
      getCameraAndMediaLibraryPermissions().then((hasPermission) => {
        setHasCameraPermission(hasPermission);

        if (!hasPermission) {
          handleCancelCamera();
        }
      });
    }
  }, [cameraPermissions, mediaLibraryPermissions, handleCancelCamera]);

  return hasCameraPermission ? (
    <Center flex={1}>
      <Center rounded="full" w="full" h="full">
        <Camera ref={cameraRef} className="w-full h-full" type={sideOfCamera} />
      </Center>
      <Animated.View
        entering={SlideInDown.delay(0).duration(1000)}
        className="h-20 w-full rounded-t-2xl bg-gray-900 absolute bottom-0 flex-row items-center justify-evenly"
      >
        <Pressable
          rounded="full"
          borderWidth={1}
          borderColor="green.500"
          bg="green.500"
          w={10}
          h={10}
          justifyContent="center"
          alignItems="center"
          _pressed={{
            opacity: 0.8,
          }}
          onPress={handleTakePicture}
        >
          <CameraIcon size={CAMERA_CONTROLS_SIZE} color={colors.white} />
        </Pressable>

        <Pressable
          rounded="full"
          borderWidth={1}
          borderColor="green.500"
          bg="green.500"
          w={10}
          h={10}
          justifyContent="center"
          alignItems="center"
          _pressed={{
            opacity: 0.8,
          }}
          onPress={handleFlipCamera}
        >
          <CameraRotate size={CAMERA_CONTROLS_SIZE} color={colors.white} />
        </Pressable>

        <Pressable
          rounded="full"
          borderWidth={1}
          borderColor="red.500"
          bg="red.500"
          w={10}
          h={10}
          justifyContent="center"
          alignItems="center"
          _pressed={{
            opacity: 0.8,
          }}
          onPress={handleCancelCamera}
        >
          <X size={CAMERA_CONTROLS_SIZE} color={colors.white} weight="fill" />
        </Pressable>
      </Animated.View>
    </Center>
  ) : (
    <LoadingScreen />
  );
}
