import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../componets/Header';
import Story from '../componets/Story';
import Scroll from '../componets/Scroll';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <Story />
      <Scroll />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
