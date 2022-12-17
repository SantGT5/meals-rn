import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import React from "react";

import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data";

import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const { ids, removeFavorite, addFavorite } =
    React.useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const mealIsFavorite = ids.includes(mealId);

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      removeFavorite(mealId);
      return;
    }

    addFavorite(mealId);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={rootContainer}>
      <Image style={image} source={{ uri: imageUrl }} />
      <Text style={titleStyle}>{title}</Text>
      <MealDetail
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyleMealDetail={textStyleMealDetail}
      />
      <View style={ListOuterContainer}>
        <View style={listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const {
  image,
  titleStyle,
  textStyleMealDetail,
  listContainer,
  ListOuterContainer,
  rootContainer,
} = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyleMealDetail: {
    color: "white",
  },
  ListOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
