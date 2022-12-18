import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MealList from "../components/MealsList/MealList";

import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  // const { ids } = React.useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter(({ id }) => favoriteMealIds.includes(id));

  if (!favoriteMeals.length) {
    return (
      <View style={rootContainer}>
        <Text style={text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const { rootContainer, text } = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
