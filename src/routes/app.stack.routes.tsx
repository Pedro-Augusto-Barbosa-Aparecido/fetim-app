import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens/Profile";
import { GradeScreen } from "../screens/Grades";
import { Home } from "../screens/Home";
import { CameraScreen } from "../screens/CameraScreen";

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
      <Screen name="config" component={Profile} />
      <Screen name="grades" component={GradeScreen} />
      <Screen name="cameraScreen" component={CameraScreen} />
    </Navigator>
  );
}
