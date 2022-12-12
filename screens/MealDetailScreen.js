import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";

import React from "react";

import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("pressed");
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me!!" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
