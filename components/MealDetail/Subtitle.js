import { Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return <Text style={styles.subtitle}> {children} </Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 24,
    marginVertical: 4,
    color: "#e2b497",
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
