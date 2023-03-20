import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryScreen } from "../screens/EntryScreen";
import { Login } from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="entry_screen"
    >
      <Screen name="login" component={Login} />
      <Screen name="entry_screen" component={EntryScreen} />
    </Navigator>
  );
}
