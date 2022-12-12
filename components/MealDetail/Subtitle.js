import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={subtitleContainer}>
      <Text style={subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const { subtitle, subtitleContainer } = StyleSheet.create({
  subtitle: {
    color: "#E2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#E2b497",
    borderBottomWidth: 2,
  },
});
