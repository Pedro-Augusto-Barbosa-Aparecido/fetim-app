import { useNavigation } from "@react-navigation/native";
import { FlatList, VStack } from "native-base";
import { Grade } from "../components/Grade";
import { Header } from "../components/Header";

const subjectExamples = [
  { classroom: "E208 B", subject: "Eletrônica digital II", id: "1" },
  { classroom: "M019 A", subject: "Probabilidade", id: "2" },
  { classroom: "M106 L3", subject: "Calculo Numérico", id: "3" },
  { classroom: "S201", subject: "Paradigmas da Programação", id: "4" },
];

export function GradeScreen() {
  const { goBack } = useNavigation();

  return (
    <VStack bgColor="gray.900" flex={1}>
      <Header title="Notas" onPressMenuIcon={() => goBack()} />
      <FlatList
        contentContainerStyle={[
          {
            width: "100%",
            marginTop: 15,
            paddingTop: 28,
            paddingHorizontal: 21,
            paddingBottom: 100,
          },
        ]}
        style={{ flex: 1 }}
        h="full"
        data={subjectExamples}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Grade {...item} />}
      />
    </VStack>
  );
}
