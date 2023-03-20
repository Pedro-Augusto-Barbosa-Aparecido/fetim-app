import {
  Input as NativeBaseInput,
  IInputProps,
  useTheme,
  FormControl,
  Text,
} from "native-base";

type Props = IInputProps & {
  errorMessage: any;
};

export function Input({ isInvalid, errorMessage, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <FormControl isInvalid={isInvalid}>
      <NativeBaseInput
        p={1}
        fontFamily="Inter_400Regular"
        borderBottomWidth={2}
        borderBottomColor="gray.800"
        keyboardAppearance="dark"
        autoCapitalize="none"
        placeholderTextColor={colors.gray[700]}
        _invalid={{
          borderColor: "red.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        <Text fontSize={"sm"}>{errorMessage}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
