import React, { createContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import Toast from "react-native-toast-message";

interface IAuthContext {
  user: FirebaseAuthTypes.User | null;
  handleSignOut: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  async function handleSignOut() {
    try {
      await auth().signOut();

      Toast.show({
        text1: "Sucesso",
        text2: "Deslogado com sucesso!",
      });
    } catch (err) {
      Toast.show({
        text1: "Falha ao deslogar.",
        text2: "Houve um problema ao tentar sair!",
        type: "error",
      });
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
