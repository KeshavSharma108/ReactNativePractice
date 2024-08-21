import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import MapView, {
  Callout,
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { markers } from "../../assest/marker";
import MapViewDirections from "react-native-maps-directions";
import { googleMapApi } from "../../assest/googleApiKey";


export default function GoogleMap() {
  // const onRegion = (regions) => {
  //   console.log(regions);
  // };

  // const onMarkerSelected = (marker)=>{
  //   Alert.alert(marker.name);
  // }
  const GOOGLE_API_KEY = "AIzaSyBNbjdmm635r6fOaNEPqv74RYZq2pJ4lBI";
  const [state, setState] = useState({
    pickupCords: {
      latitude: 27.508358857232068,
      latitudeDelta: 0.030030006655362484,
      longitude: 77.65415148809552,
      longitudeDelta: 0.01765664666891098,
    },
    droplocationCords: {
      latitude: 27.582662806885075,
      latitudeDelta: 0.019208170180768036,
      longitude: 77.68680268898606,
      longitudeDelta: 0.011301152408123016,
    },
  });

  const { pickupCords, droplocationCords } = state;

  const calloutPressed = (ev) => {
    console.log(ev);
  };

  const [region, setRegion] = useState({
    latitude: 27.508358857232068,
    latitudeDelta: 0.030030006655362484,
    longitude: 77.65415148809552,
    longitudeDelta: 0.01765664666891098,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        onRegionChangeComplete={setRegion}
        region={region}
        showsMyLocationButton
        initialRegion={pickupCords}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker}>
            <Callout onPress={calloutPressed}>
              <View>
                <Text>{marker.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={googleMapApi}
        />
      </MapView>
    </View>
  );
}
