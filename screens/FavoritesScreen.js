import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default FavoritesScreen;
