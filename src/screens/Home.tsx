import Animated, { SlideInDown } from "react-native-reanimated";

import {
  Heading,
  HStack,
  Pressable,
  Text,
  Spacer,
  useTheme,
  ScrollView,
  VStack,
  FlatList,
} from "native-base";

import { CaretRight, Gear } from "phosphor-react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserInfo } from "../components/UserInfo";
import { Container } from "../components/Container";
import { MenuButton } from "../components/MenuButton";
import { useState } from "react";
import { Notice } from "../components/Notice";
import { useNavigation } from "@react-navigation/native";

const noticesExample = [
  {
    id: "1",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "2",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "3",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "4",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "5",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "6",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
  {
    id: "7",
    title: "Transferencia interna de curso/turno  - 1º 2023",
    noticeOwnerName: "CRA",
    subTitle: "Prezados(as) Alunos(as)",
    uriAvatarOfNoticeOwner:
      "https://s3-alpha-sig.figma.com/img/2b65/bf30/2cf018b542a9bb018e54eb0fdb533d9d?Expires=1679875200&Signature=ae5kvaS0WBah8~ggZ3qeSazO0xVUrdAu51Onj3dzh4aIGh9yF5yW42hcItqqOFGJ~~xTJZbCzIZDXcNctq0Pyx7PQezY1cpp-fJ9TM4mE58Rm8WlVFJ7kzh~hSUXmb1ldqn-ssjRmG02sTLeaMXPCcKTvgz4jhERLgtKpMSlo0VFkeI5AnPGs4-LMOWRAhEz-P1t9u79jElhyjXC~pmP4Kg27NBhsISOQqVhlficdTxemxBnqBF8qldhtoNbpfS7xPp0qzrTdSGzojs7BZ2-po1LIUEB6e-bD4jc-3HO4m0lLZIQcbMpacvEgyKHTLtiss0G5y2IwQqkZzrEKoo0CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: new Date(),
  },
];

export function Home() {
  const [menuViewType, setMenuViewType] = useState<"large" | "small">("large");

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const menus = [
    {
      iconName: "calendar-month-outline",
      title: "Provas",
      routeName: "tests",
      icon: null,
    },
    {
      iconName: "playlist-edit",
      title: "Notas",
      routeName: "grades",
      icon: null,
    },
    {
      iconName: "clock-check-outline",
      title: "Frequência",
      routeName: "frequency",
      icon: null,
    },
    {
      iconName: "clock-time-four-outline",
      title: "Horarios de aulas",
      routeName: "class_scheduling",
      icon: null,
    },
    {
      iconName: "gear",
      title: "Config",
      routeName: "config",
      icon: <Gear size={30} weight="bold" color={colors.white} />,
    },
  ];

  return (
    <Container>
      <UserInfo mt={12} />
      <Animated.View
        className="bg-gray-900 flex-1 w-full rounded-t-[36px] items-start justify-start pt-11 mt-7"
        entering={SlideInDown.delay(0).duration(1000)}
      >
        <HStack px={6} alignItems="center" w="full">
          <Heading color="white" fontSize={18}>
            Serviços
          </Heading>
          <Spacer />
          <Pressable
            alignItems="center"
            flexDirection="row"
            onPress={() =>
              setMenuViewType((prevState) => {
                if (prevState === "large") return "small";
                return "large";
              })
            }
          >
            <Text color="red.500" mr={1}>
              View {menuViewType === "large" ? "All" : "Less"}
            </Text>
            <CaretRight size={12} weight="bold" color={colors.red[500]} />
          </Pressable>
        </HStack>
        <HStack mt={6}>
          {menuViewType === "large" ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {menus.map(({ iconName, routeName, title, icon }, index) => (
                <MenuButton
                  /* @ts-ignore disable this line because route name always is correct type */
                  navigateAction={() => navigate(routeName)}
                  variant={menuViewType}
                  key={iconName}
                  icon={
                    icon || (
                      <MaterialCommunityIcons
                        /* @ts-ignore disable this line because icon name always is correct type */
                        name={iconName}
                        size={30}
                        color={colors.white}
                      />
                    )
                  }
                  title={title}
                  mr={8}
                  ml={index === 0 ? 10 : 0}
                />
              ))}
            </ScrollView>
          ) : (
            <HStack w="full" pl={8} pr={0} flexWrap="wrap">
              {menus.map(({ iconName, routeName, title, icon }) => (
                <MenuButton
                  /* @ts-ignore disable this line because route name always is correct type */
                  navigateAction={() => navigate(routeName)}
                  variant={menuViewType}
                  key={iconName}
                  icon={
                    icon || (
                      <MaterialCommunityIcons
                        /* @ts-ignore disable this line because icon name always is correct type */
                        name={iconName}
                        size={28}
                        color={colors.white}
                      />
                    )
                  }
                  title={title}
                  mr={6}
                  mb={4}
                />
              ))}
            </HStack>
          )}
        </HStack>
        <VStack px={6} mt={8}>
          <Heading fontSize={18} fontFamily="Roboto_700Bold" color="white">
            Avisos
          </Heading>
          <FlatList
            contentContainerStyle={[
              {
                width: "100%",
                marginTop: 15,
                paddingBottom: 200,
              },
              menuViewType === "small" && { paddingBottom: 260 },
            ]}
            h="full"
            data={noticesExample}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Notice {...item} />}
          />
        </VStack>
      </Animated.View>
    </Container>
  );
}
