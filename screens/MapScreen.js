import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapViewComponent from '../components/MapViewComponent';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapViewComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
