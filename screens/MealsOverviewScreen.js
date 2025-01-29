import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;

  const DisplayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={DisplayedMeals} />;
}

export default MealsOverviewScreen;
