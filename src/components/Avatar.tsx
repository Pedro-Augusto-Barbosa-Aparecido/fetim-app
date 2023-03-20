import { Avatar as NativeBaseAvatar, IAvatarProps } from "native-base";

type Props = IAvatarProps & {
  uri: string;
};

export function Avatar({ uri, ...rest }: Props) {
  return (
    <NativeBaseAvatar
      borderColor="red.500"
      borderWidth={3}
      source={{ uri }}
      {...rest}
    />
  );
}
