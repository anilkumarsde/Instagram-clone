import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';

const Test = () => {
  return (
    <View>
      <Text style={styles.text}>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Ritalic,
  },
});
