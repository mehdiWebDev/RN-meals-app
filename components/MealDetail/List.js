import { View, Text, StyleSheet } from "react-native";

const List = ({ selectedMeal }) => {
  return (
    <>
      {selectedMeal.map((step) => (
        <View key={step} style={styles.listItem}>
          <Text style={styles.itemText}>{step}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
export default List;
