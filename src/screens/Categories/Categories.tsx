import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetCategoriesQuery } from "../../services/groceryApi";
import CategoryCard from "./CategoryCard";
import { verticalScale } from "../../utilis/scaling";

type Props = {
  numColumns?: number;
  horizontal?: boolean;
  listKey: string;
};

const Categories: React.FC<Props> = ({
  numColumns = 1,
  horizontal = false,
  listKey,
}) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <View>
      {!isLoading && (
        <>
          <View style={styles.container}>
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
  container: {
    paddingTop: verticalScale(32),
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
