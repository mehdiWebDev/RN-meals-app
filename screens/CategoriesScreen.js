import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const renderItem = (itemData, navigation) => {
  const pressHandler = () => {
    navigation.navigate("Meals Overview", {
      categoryId: itemData.item.id,
    });
  };
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return renderItem(itemData, navigation);
      }}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
