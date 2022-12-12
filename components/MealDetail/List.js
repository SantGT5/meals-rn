import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint, i) => (
    <View style={listItem} key={i}>
      <Text style={itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const { listItem, itemText } = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#E2B497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
