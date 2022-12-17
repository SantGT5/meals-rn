import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import React from "react";

// Component
import MealList from "../components/MealsList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

    return <MealList items={displayedMeals} />;
  }

export default MealsOverviewScreen;

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
