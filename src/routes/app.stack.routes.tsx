import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConfigScreen } from "../screens/ConfigScreen";
import { GradeScreen } from "../screens/Grades";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="config" component={ConfigScreen} />
      <Screen name="grades" component={GradeScreen} />
    </Navigator>
  );
}
