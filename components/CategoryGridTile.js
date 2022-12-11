import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [button, pressed ? buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[innerContainer, { backgroundColor: color }]}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const { gridItem, innerContainer, button, titleStyle, buttonPressed } =
  StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      // Android Shadow
      elevation: 4,
      // IOS Shadow
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      shadowOpacity: 0.25,
    },
    button: {
      flex: 1,
    },
    buttonPressed: {
      opacity: 0.8,
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    titleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
  });
