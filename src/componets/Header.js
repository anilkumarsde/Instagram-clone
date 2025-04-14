import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
//icon
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Instagram</Text>
        <Entypo name={'chevron-small-down'} size={25} />
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <Entypo name={'heart-outlined'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name={'send'} size={25} />
          <View style={styles.sendWrapper}>
            <Text style={styles.counterText}>4</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.Bold,
    fontSize: width * 0.07,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: width * 0.05,
  },
  sendWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    right: width * -0.015,
    bottom: height * 0.02,
    height: height * 0.025,
    width: width * 0.05,
    borderRadius: width * 0.03,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: width * 0.025,
    fontFamily: fonts.Bold,
  },
});
