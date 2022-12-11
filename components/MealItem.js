import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={mealItemStyle}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? buttonPressed : null)}
      >
        <View>
          <View>
            <Image style={image} source={{ uri: imageUrl }} />
            <Text style={titleStyle}>{title}</Text>
          </View>
          <View style={details}>
            <Text style={detailsItem}>{duration}m</Text>
            <Text style={detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={detailsItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const {
  image,
  titleStyle,
  mealItemStyle,
  details,
  detailsItem,
  buttonPressed,
} = StyleSheet.create({
  mealItemStyle: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    // Android
    elevation: 4,
    // IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
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
