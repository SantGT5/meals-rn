import { View, Text, StyleSheet } from "react-native";

function MealDetail({
  duration,
  complexity,
  affordability,
  style,
  textStyleMealDetail,
}) {
  return (
    <View style={[details, style]}>
      <Text style={[detailsItem, textStyleMealDetail]}>{duration}m</Text>
      <Text style={[detailsItem, textStyleMealDetail]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[detailsItem, textStyleMealDetail]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetail;

const { details, detailsItem } = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
