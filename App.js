import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoritContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#f5f5f5",
        drawerActiveBackgroundColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="CategoriesDrawer"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                title: "Favorite Meals",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="Meal Details"
              options={{
                title: "About the Meal",
              }}
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritContextProvider>
    </>
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
