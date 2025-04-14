import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {storyData} from '../utils/storyData';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {fonts} from '../utils/fonts';
import Feather from 'react-native-vector-icons/Feather';

const {height, width} = Dimensions.get('window');

const Story = () => {
  // const [imageUri, setImageUri] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [curentStory, setCurentStory] = useState();




  // Function to request storage permission
  const requestStoragePermission = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (PermissionsAndroid.RESULTS.GRANTED) {
        pickImage();
      } else {
        Alert.alert(
          'Permission Denied',
          'Storage permission is required to pick an image.',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  console.log(allImages);

  // Function to open gallery
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        setAllImages(pre => [
          ...pre,
          {img: response.assets[0].uri, name: 'anil'},
        ]);

        // setImageUri(response.assets[0].uri);
      }
    });
  };
  setTimeout(() => {
    const time = setModalVisible(false);
  }, 10000);
  // console.log(isModalVisible);

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible}>
        <View style={styles.storyImageWrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.leftHeaderWraper}>
              <Image
                source={require('../images/img5.jpg')}
                style={styles.storyUserImg}
              />
              <Text style={styles.storyUserTitle}>{curentStory?.name}</Text>
              <Text style={styles.storyTime}>8m</Text>
            </View>
            <View style={styles.rightHeaderWrapper}>
              <Entypo name={'dots-three-vertical'} size={width * 0.04} />
            </View>
          </View>
          <Image
            source={{uri: curentStory?.img}}
            style={{height: '80%', width: '100%', resizeMode: 'contain'}}
          />
          <KeyboardAvoidingView style={styles.footerWrapper}>
            <TextInput placeholder="Message" style={styles.messageBox} />
            <View style={styles.footerIconWrapper}>
              <AntDesign name={'hearto'} size={width * 0.06} />
              <Feather name={'send'} size={width * 0.06} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>

      <ScrollView
        style={styles.storyWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.plusIconWrapper}
          onPress={pickImage}
          activeOpacity={0.8}>
          <LinearGradient
            colors={['#c90e94', '#bfb21b']}
            style={styles.lineraGradient}>
            <Image
              source={require('../images/img1.jpg')}
              style={styles.userImg}
            />
            {/* <Text>Your Story</Text> */}
            <View style={{position: 'absolute', right: 10, bottom: 1}}>
              <AntDesign name={'pluscircle'} size={20} onPress={pickImage} />
            </View>
          </LinearGradient>
          <Text style={styles.useName}>Your Story</Text>
        </TouchableOpacity>

        <View
          style={{
            // backgroundColor: 'blue',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          {allImages.map((item, index) => (
            <View style={styles.itemlitstWrapper} key={index}>
              <LinearGradient
                colors={['#c90e94', '#bfb21b']}
                style={styles.lineraGradient}>
                <TouchableOpacity
                  onPress={() => {
                    setCurentStory(item), setModalVisible(true);
                  }}>
                  <Image source={{uri: item.img}} style={styles.userImg} />
                </TouchableOpacity>
              </LinearGradient>
              <Text style={styles.useName}>
                {' '}
                {item.name}
                {index + 1}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    paddingLeft: width * 0.02,
    marginTop: height * 0.01,
  },
  itemlitstWrapper: {
    marginHorizontal: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  userImgWrapper: {},
  lineraGradient: {
    width: width * 0.24,
    height: height * 0.12,
    // padding:10,
    borderRadius: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconWrapper: {
    // backgroundColor: 'red',
  },
  userImg: {
    height: height * 0.11,
    width: width * 0.22,
    borderRadius: width * 0.2,
    borderColor: 'white',
    borderWidth: width * 0.007,
    // resizeMode:'contain'
  },
  useName: {
    fontSize: width * 0.03,
    marginTop: height * 0.003,
    textAlign: 'center',
  },
  storyWrapper: {
    flexDirection: 'row',
    // gap:10,
    // alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  storyImageWrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  hederWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.02,
    justifyContent: 'space-between',
  },
  leftHeaderWraper: {
    flexDirection: 'row',
    gap: 10,
  },
  storyUserImg: {
    height: height * 0.05,
    width: width * 0.1,
    borderRadius: width / 2,
  },
  storyUserTitle: {
    fontSize: width * 0.034,
    fontFamily: fonts.Semibold,
  },
  storyTime: {
    fontSize: width * 0.03,
    fontFamily: fonts.Semibold,
    color: 'grey',
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    gap: width * 0.04,
    position: 'absolute',
    bottom: height * 0.04,
  },
  messageBox: {
    borderWidth: width * 0.002,
    width: '75%',
    borderRadius: width * 0.2,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.034,
    fontFamily: fonts.Semibold,
    color: 'black',
  },
  footerIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.04,
  },
});
