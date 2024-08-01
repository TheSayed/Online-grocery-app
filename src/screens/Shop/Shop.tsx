import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import Search from "../../components/Search";
import { scale } from "../../utilis/scaling";
import { colors } from "../../constants/colors";
import Categories from "../Categories/Categories";
import PopularDeals from "../PopularDeals/PopularDeals";
import TitleContainer from "../../components/TitleContainer";
import { ScrollView } from "react-native-gesture-handler";

const Shop = () => {
  const { isLoading } = useGetProductsQuery();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    >
      <View style={styles.searchContainer}>
        <Search />
      </View>

      <View style={styles.subContainer}>
        <ScrollView>
          {!isLoading && (
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    marginStart: scale(16),
  },
  searchContainer: {
    marginHorizontal: scale(16),
  },
});

export default Shop;
