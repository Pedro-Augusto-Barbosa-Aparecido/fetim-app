import { HStack, Text, VStack } from "native-base";
import { Avatar } from "./Avatar";

import dayjs from "dayjs";

interface Props {
  title: string;
  subTitle: string;
  uriAvatarOfNoticeOwner: string;
  noticeOwnerName: string;
  date: Date;
}

export function Notice({
  date,
  noticeOwnerName,
  subTitle,
  title,
  uriAvatarOfNoticeOwner,
}: Props) {
  const dateFormatted = dayjs(date).format("DD/MM/YYYY HH:mm");

  return (
    <HStack
      alignItems="center"
      bgColor="gray.100"
      rounded="2xl"
      w="full"
      px={3}
      py={2}
      mb={2}
    >
      <Avatar uri={uriAvatarOfNoticeOwner} mr={2} />
      <VStack w="full" alignItems="flex-start">
        <HStack alignItems="center">
          <Text
            flex={3}
            fontFamily="Roboto_700Bold"
            fontSize={18}
            color="gray.600"
          >
            {noticeOwnerName}
          </Text>
          <Text fontFamily="body" fontSize={12} flex={3} color="gray.700">
            {dateFormatted}
          </Text>
        </HStack>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          fontFamily="Roboto_700Bold"
          fontSize={12}
          lineHeight={14}
          color="gray.700"
        >
          {title}
        </Text>
        <Text fontFamily="body" fontSize={12} flex={3} color="gray.700">
          {subTitle}
        </Text>
      </VStack>
    </HStack>
  );
}
