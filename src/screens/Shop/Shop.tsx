import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import Search from "../../components/Search";
import { scale, verticalScale } from "../../utilis/scaling";
import { colors } from "../../constants/colors";
import Categories from "../Categories/Categories";
import PopularDeals from "../PopularDeals/PopularDeals";
import TitleContainer from "../../components/TitleContainer";
import PopularDealsScreen from "../PopularDeals/PopularDealsScreen";

const Shop = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <View style={styles.container}>
      <Search />
      <ScrollView>
        {!isLoading && !error && (
          <View>
            <TitleContainer
              primaryTitle="Categories"
              secondaryTitle="See All"
              marginTop={34}
            />
            <Categories
              horizontal={true}
              numColumns={1}
              listKey="Categories-flatlist-numColumns-1"
            />

            <TitleContainer
              primaryTitle="Popular Deals"
              secondaryTitle="See All"
              marginTop={36}
            />
            <PopularDeals
              horizontal={true}
              numColumns={1}
              listKey="PopularDeals-flatlist-numColumns-1"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scale(16),
    alignItems: "center",
  },
});
