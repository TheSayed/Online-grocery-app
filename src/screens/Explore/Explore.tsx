// Explore.tsx
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { colors } from "../../constants/colors";
import Search from "../../components/Search";
import { scale } from "../../utilis/scaling";
import * as React from "react";
import TabBarConfig from "./TabBarConfig";
import TabViewLogic from "./TabViewLogic";
import { TabView } from "react-native-tab-view";

const Explore = () => {
  const layout = useWindowDimensions();
  const tabViewProps = TabViewLogic(layout.width);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search onSearch={() => console.log("search")} />
      </View>
      <View style={styles.productsContainer}>
        <TabView
          navigationState={tabViewProps.navigationState}
          renderScene={tabViewProps.renderScene}
          onIndexChange={tabViewProps.onIndexChange}
          initialLayout={tabViewProps.initialLayout}
          renderTabBar={(props) => <TabBarConfig {...props} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  productsContainer: {
    flex: 1,
    width: "100%", // Ensure it takes full width
  },
  search: {
    paddingHorizontal: scale(16),
  },
});

export default Explore;
