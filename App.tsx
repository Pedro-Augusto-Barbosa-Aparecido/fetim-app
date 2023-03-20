/* eslint-disable camelcase */
import "react-native-gesture-handler";

import React from "react";

import { StatusBar } from "expo-status-bar";

import { THEME } from "./src/theme";
import { NativeBaseProvider } from "native-base";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

import { LoadingScreen } from "./src/components/Loading";
import { Routes } from "./src/routes";

import Toast from "react-native-toast-message";
import { AuthContextProvider } from "./src/context/AuthContext";

import "./src/lib/dayjs";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <LoadingScreen />}

        <StatusBar backgroundColor="transparent" style="light" translucent />
        <Toast position="top" topOffset={50} />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
