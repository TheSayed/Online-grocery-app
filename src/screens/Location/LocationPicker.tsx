import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { colors } from "../../constants/colors";
import { scale, verticalScale } from "../../utilis/scaling";
import { useNavigation } from "@react-navigation/native"; // Import the typed dispatch hook
import { setCityName } from "./locationSlice"; // Import the action
import { useDispatch } from "react-redux";

const LocationPicker = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Use the typed dispatch

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  const handleMapPress = (e: any) => {
    setLocation(e.nativeEvent.coordinate);
  };

  const handleConfirmLocation = async () => {
    if (location) {
      try {
        const result = await Location.reverseGeocodeAsync(location);
        if (result.length > 0) {
          const { city, region } = result[0];
          const locationName = city || region || "Unknown location";
          dispatch(setCityName(locationName)); // Dispatch the action to set city name
          navigation.goBack(); // Go back to the previous screen
        }
      } catch (error) {
        console.error("Error getting location name:", error);
        dispatch(setCityName("Unable to get location name"));
        navigation.goBack();
      }
    }
  };

  if (!location) {
    return <Text>Loading map...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleConfirmLocation}>
        <Text style={styles.buttonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "90%",
  },
  button: {
    backgroundColor: colors.primary,
    padding: scale(15),
    alignItems: "center",
    marginTop: verticalScale(10),
    borderRadius: scale(5),
  },
  buttonText: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: "bold",
  },
});
