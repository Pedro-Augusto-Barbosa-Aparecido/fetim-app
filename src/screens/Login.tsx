import { Heading, Image, Pressable, useTheme, VStack } from "native-base";
import {
  EnvelopeSimple,
  Check,
  Lock,
  Eye,
  EyeSlash,
  X,
} from "phosphor-react-native";
import { useState } from "react";

import Animated, { SlideInDown } from "react-native-reanimated";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import auth from "@react-native-firebase/auth";

import Toast from "react-native-toast-message";

import { Dimensions } from "react-native";

import LogoImage from "../assets/logo.png";

const loginSchema = z.object({
  email: z.string({ required_error: "O e-mail precisa ser informado" }).email({
    message: "E-mail ou senha inválidos",
  }),
  password: z
    .string({ required_error: "Insira uma senha válida" })
    .transform((password) => password.trim())
    .refine((password) => password.length > 0, {
      message: "E-mail ou senha inválidos",
    }),
});

type LoginFormData = z.output<typeof loginSchema>;

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { colors } = useTheme();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function handleTogglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  async function handleLogin({ email, password }: LoginFormData) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (_) {
      Toast.show({
        text1: "Falha no login",
        text2: "Não foi possível efetuar o login",
        type: "error",
      });
    }
  }

  return (
    <VStack bgColor="gray.900" flex={1} direction="column-reverse">
      <Image
        source={LogoImage}
        alt=""
        alignSelf="center"
        position="absolute"
        top={Math.floor(
          Dimensions.get("screen").height -
            Dimensions.get("screen").height * 0.8
        )}
      />
      <Animated.View
        className="bg-gray-200 flex-1 max-h-96 w-full rounded-t-[36px] items-start justify-start px-6 py-11"
        entering={SlideInDown.delay(0).duration(1000)}
      >
        <Heading mb={46} fontFamily="heading" fontSize={26} lineHeight={30}>
          Faça seu Login
        </Heading>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => {
            return (
              <Input
                variant="underlined"
                placeholder="Insira seu e-mail ..."
                keyboardType="email-address"
                onChangeText={onChange}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                InputLeftElement={
                  <EnvelopeSimple
                    size={24}
                    color={colors.green[500]}
                    weight="bold"
                    style={{ marginRight: 4 }}
                  />
                }
                InputRightElement={
                  isValid ? (
                    <Check size={20} weight="bold" color={colors.green[500]} />
                  ) : (
                    <X size={20} weight="bold" color={colors.red[500]} />
                  )
                }
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              mt={4}
              variant="underlined"
              type={showPassword ? "text" : "password"}
              placeholder="Insira seu e-mail ..."
              onChangeText={onChange}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              InputLeftElement={
                <Lock size={24} color={colors.green[500]} weight="bold" />
              }
              InputRightElement={
                <Pressable onPress={handleTogglePasswordVisibility}>
                  {showPassword ? (
                    <Eye
                      size={20}
                      weight="bold"
                      color={!isValid ? colors.red[500] : colors.green[500]}
                    />
                  ) : (
                    <EyeSlash
                      size={20}
                      weight="bold"
                      color={!isValid ? colors.red[500] : colors.green[500]}
                    />
                  )}
                </Pressable>
              }
            />
          )}
        />
        <Button
          onPress={handleSubmit(handleLogin)}
          mt={42}
          w="full"
          title="Logar"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          _disabled={{
            borderColor: "gray.600",
            bgColor: "gray.600",
          }}
        />
      </Animated.View>
    </VStack>
  );
}
