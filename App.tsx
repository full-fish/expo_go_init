import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Ionicons,
  Fontisto,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
//
import Main from "./src/page/Main";
export type RootStackParamList = {
  Home: undefined;
};

export type RootTabParamList = {
  Main: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Main":
              return <AntDesign name="home" size={24} color={"black"} />;
          }
        },
        headerTitleStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
        headerStyle: {
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
