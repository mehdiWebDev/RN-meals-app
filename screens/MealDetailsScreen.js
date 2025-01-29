import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const isFavoriteMeal = isFavorite(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const handleSave = () => {
    if (isFavorite(mealId)) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavoriteMeal ? "star" : "star-outline"}
          color="white"
          onPress={handleSave}
        />
      ),
    });
  }, [navigation, handleSave, isFavoriteMeal]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle> Ingredients </Subtitle>
          <List selectedMeal={selectedMeal.ingredients} />
          <Subtitle> Steps </Subtitle>
          <List selectedMeal={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
export default MealDetailsScreen;
