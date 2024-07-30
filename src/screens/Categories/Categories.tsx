import {
  View,
  FlatList,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import React from "react";
import { useGetCategoriesQuery } from "../../services/groceryApi";
import CategoryCard from "./CategoryCard";

type Props = {
  numColumns?: number;
  horizontal?: boolean;
  listKey: string;
  containerStyle?: ViewStyle | TextStyle | ImageStyle;
};

const Categories: React.FC<Props> = ({
  numColumns = 1,
  horizontal = false,
  listKey,
  containerStyle,
}) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  return (
    <View>
      {!isLoading && (
        <>
          <View style={containerStyle}>
            <FlatList
              horizontal={horizontal}
              numColumns={numColumns}
              columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              key={listKey}
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CategoryCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
});
