import React from "react";
import { View, SafeAreaView } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import styles from './styles';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>
      <View style={styles.messageContainer}>
        <CovidMessage />
      </View>
      <View style={styles.searchContainer}>
        <HomeSearch />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;