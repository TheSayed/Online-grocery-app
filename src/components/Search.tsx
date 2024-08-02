import { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";
import { useGetProductsQuery } from "../services/groceryApi";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../navigators/route";
import { icons } from "../../assets/icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const { data: products = [], isLoading } = useGetProductsQuery();

  const maxVisibleSuggestions = 3;
  const suggestionHeight = verticalScale(20);
  const containerHeight = suggestionHeight * maxVisibleSuggestions;

  const handleSearchPress = useCallback(() => {
    if (!searchQuery) return;
    navigation.navigate(ScreenNames.Search, { searchQuery });
  }, [navigation, searchQuery]);

  const handleSuggestionPress = (item: string) => {
    navigation.navigate(ScreenNames.Search, { searchQuery: item });
    setSearchQuery(item);
    setIsFocused(false);
  };

  useEffect(() => {
    const updateSuggestions = () => {
      if (searchQuery.trim() !== "") {
        const filteredSuggestions = products
          .map((product) => product.name)
          .filter((name) =>
            name?.toLowerCase().includes(searchQuery.toLowerCase())
          );

        const sortedSuggestions = filteredSuggestions.sort((a, b) => {
          return (
            a?.toLowerCase()?.indexOf(searchQuery?.toLowerCase()) ||
            0 - (b?.toLowerCase()?.indexOf(searchQuery?.toLowerCase()) || 0)
          );
        });

        setSuggestions(sortedSuggestions);
      } else {
        setSuggestions([]);
      }
    };

    updateSuggestions();
  }, [searchQuery]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchButton}>
        <Image tintColor={colors.secondary} source={icons.search} />

        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={colors.secondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsFocused(true)}
          clearButtonMode="never"
          returnKeyType="search"
          onSubmitEditing={handleSearchPress}
        />

        {isFocused && searchQuery.length >= 2 && (
          <TouchableOpacity
            style={styles.searchTextContainer}
            onPress={handleSearchPress}
          >
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        )}
      </View>
      {isFocused && searchQuery.length >= 2 && (
        <View
          style={[styles.suggestionsContainer, { height: containerHeight }]}
        >
          {suggestions.length > 0 ? (
            <FlatList
              data={suggestions}
              keyExtractor={(index) => index.toString()}
              ItemSeparatorComponent={Separator}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
                  <Text style={styles.suggestion}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          ) : (
            <Text style={styles.suggestion}>No Matched Results</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: verticalScale(18),
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.greyBackground,
    borderRadius: 8,
    borderWidth: scale(1),
    borderColor: colors.grey,
    opacity: 0.9,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: "relative",
    paddingStart: verticalScale(20),
    gap: scale(4),
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: verticalScale(48),
    fontSize: moderateScale(16),
    color: colors.black,
  },
  searchTextContainer: {
    position: "absolute",
    right: 5,
    paddingHorizontal: scale(10),
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: colors.primary,
    borderRadius: scale(10),
  },
  searchText: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontFamily: "regular400",
  },
  clearButton: {
    position: "absolute",
    left: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  clearText: {
    color: colors.primary,
    fontSize: moderateScale(16),
  },
  suggestionsContainer: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: scale(1),
    borderRadius: 4,
    marginTop: verticalScale(8),
    zIndex: 1,
    width: "100%",
  },
  suggestion: {
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: scale(1),
  },
  noSuggestions: {
    padding: 8,
    textAlign: "center",
    color: "gray",
  },
  separator: {
    height: verticalScale(1),
    width: "100%",
    backgroundColor: colors.greySeparator,
  },
});

export default Search;
