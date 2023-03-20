import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { AppRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.stack.routes";

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <Box flex={1} bgColor="gray.900">
      <NavigationContainer>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
