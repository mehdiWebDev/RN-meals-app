import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import MealDetails from "./MealDetails";
import { useNavigation } from '@react-navigation/native';


const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {

  const navigation = useNavigation();
  const hanldeNavigate = (id) => {
    navigation.navigate('Meal Details', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={hanldeNavigate.bind(this, id)}
        android_ripple={{ color: "#efefef" }}
        style={({ pressed }) => pressed && styles.pressedButton}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },

  pressedButton: {
    opacity: 0.5,
  },
});

export default MealItem;
