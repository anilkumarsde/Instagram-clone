import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {imageData} from '../utils/imageData';

//icons

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {fonts} from '../utils/fonts';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

const Scroll = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [follow, setFollow] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  //like handler
  const LikeHandler = () => {
    setLike(!like);
    like ? setCount(pre => pre - 1) : setCount(pre => pre + 1);
    console.log(count);
  };

  // comentHandler
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // add comment handler
  const AddCommentHandler = comment => {
    if (comment.trim().length === 0) {
      Alert.alert('Please write comments');
    } else {
      {
        setCommentData([
          ...commentData,
          {
            id: Date.now(),
            title: 'Anil',
            img: require('../images/img4.jpg'),
            comm: comment,
          },
        ]);
        setComment(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        style={{margin: 0}}
        isVisible={isModalVisible}
        onSwipeComplete={() => toggleModal()}
        swipeDirection="down">
        <KeyboardAvoidingView style={styles.modalWrapper}>
          <View style={styles.mainWrapper}>
            <View style={styles.downSwipeMark1} />
            <Text style={styles.commentTxt}>Comments</Text>
          </View>
          <View style={styles.commentWrapper}>
            <FlatList
              data={commentData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.commentListbox}>
                  <View style={styles.leftbox}>
                    <Image source={item.img} style={styles.userImg} />
                    <View style={styles.userTitleWrapper}>
                      <View style={styles.titleNTimeWrapper}>
                        <Text style={styles.titleTxt}>{item.title}</Text>
                        <Text style={styles.timeTxt}>7m</Text>
                      </View>
                      <Text style={styles.commTxt}>{item.comm}</Text>
                      <TextInput
                        placeholder="Reply"
                        style={styles.replyInput}
                      />
                    </View>
                  </View>
                  <View style={styles.rightBox}>
                    <TouchableOpacity onPress={() => toggleModal()}>
                      <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        size={25}
                        color={like ? 'tomato' : 'black'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.textInpWrapper}>
            <View style={styles.leftInputWrapper}>
              <Image
                source={require('../images/img1.jpg')}
                style={styles.userImg}
              />
              <TextInput
                placeholder="Add a comment for........."
                style={styles.inputTxt}
                onChangeText={text => setComment(text)}
              />
            </View>
            <View style={styles.righInputWrapper}>
              <TouchableOpacity
                style={styles.addCommentBtn}
                onPress={() => AddCommentHandler(comment)}>
                <AntDesign name={'arrowup'} size={20} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <FlatList
        data={imageData}
        keyExtractor={item => item.id}
        // contentContainerStyle={{marginVertical:10}}
        renderItem={({item}) => (
          <View style={styles.itemWrapper}>
            {/* header */}
            <View style={styles.header}>
              {/* leftwraper */}

              <View style={styles.leftWrapper}>
                <TouchableOpacity>
                  <Image source={item.Image} style={styles.titleImg} />
                </TouchableOpacity>
                <Text style={styles.userIdTitle}>{item.title}</Text>
              </View>

              {/* RightWrapper */}
              <View style={styles.rightWrapper}>
                <TouchableOpacity
                  style={styles.followBtn}
                  onPress={() => setFollow(!follow)}>
                  {follow ? (
                    <Text style={styles.followBtnTxt}>Following</Text>
                  ) : (
                    <Text style={styles.followBtnTxt}>Follow</Text>
                  )}
                </TouchableOpacity>
                <MaterialCommunityIcons name={'dots-vertical'} size={25} />
              </View>
            </View>
            {/* mainImgwrapper */}
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.mainImageWrapper}
              onPress={() => LikeHandler()}>
              {console.log(like)}
              <Image source={item.Image} style={styles.mainItemImg} />
            </TouchableOpacity>

            {/* FooterWrapper */}

            <View style={styles.footerWrapper}>
              <View style={styles.leftFooterWrapper}>
                <View style={styles.commonContainer}>
                  <TouchableOpacity>
                    <AntDesign
                      name={like ? 'heart' : 'hearto'}
                      size={25}
                      color={like ? 'red' : null}
                    />
                  </TouchableOpacity>
                  <Text style={styles.count}>{count}</Text>
                </View>
                <View style={styles.commonContainer}>
                  <TouchableOpacity onPress={() => toggleModal()}>
                    <Ionicons
                      name={'chatbubble-outline'}
                      size={25}
                      style={{transform: [{rotateY: '180deg'}]}}
                    />
                  </TouchableOpacity>
                  <Text style={styles.count}>32</Text>
                </View>
                <View style={styles.commonContainer}>
                  <TouchableOpacity>
                    <Feather name={'send'} size={25} />
                  </TouchableOpacity>
                  <Text style={styles.count}>400</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
                <FontAwesome
                  name={bookmark ? 'bookmark' : 'bookmark-o'}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.descriptionText}>
                lajafjoajljosajfafjasj aljojaj ajisfja ajfaas aj0fj alfffsss
                flflfflflfjlfjjflfjlfjl
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
    flex: 1,
    // height:'100%',
    // backgroundColor:'red'
    height: '75%',
    // flex:1
  },
  itemWrapper: {
    marginBottom: height * 0.02,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.024,
    // marginBottom: height * 0.01,
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  titleImg: {
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: width / 2,
    // borderWidth: 1,
  },
  userIdTitle: {
    fontSize: width * 0.034,
    fontFamily: fonts.Semibold,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.04,
  },
  followBtn: {
    borderWidth: width * 0.003,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.015,
  },
  followBtnTxt: {
    fontSize: width * 0.032,
    fontFamily: fonts.Semibold,
  },
  mainImageWrapper: {marginVertical: height * 0.02},
  mainItemImg: {
    height: height * 0.55,
    width: width,
    opacity: 1,
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.002,
  },
  leftFooterWrapper: {
    flexDirection: 'row',
    gap: width * 0.04,
  },
  commonContainer: {
    flexDirection: 'row',
    gap: width * 0.01,
  },
  count: {
    fontSize: width * 0.035,
    fontFamily: fonts.Semibold,
  },
  descriptionWrapper: {
    paddingLeft: width * 0.025,
    width: '100%',
  },
  descriptionText: {
    fontSize: width * 0.032,
    color: 'grey',
  },
  modalWrapper: {
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    // flexGrow:1,
  },
  mainWrapper: {
    marginTop: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downSwipeMark1: {
    height: height * 0.0023,
    width: width * 0.1,
    backgroundColor: 'grey',
    borderRadius: width / 2,
    marginBottom: height * 0.015,
    marginTop: height * 0.01,
  },

  commentTxt: {
    fontSize: width * 0.035,
    textAlign: 'center',
    fontFamily: fonts.Bold,
    color: 'black',
    // marginBottom:
  },
  textInpWrapper: {
    position: 'absolute',
    width: '100%',
    // top: height * 0.9,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    // gap: width * 0.02,
    justifyContent: 'space-between',
    // backgroundColor:'red'
  },
  userImg: {
    height: height * 0.05,
    width: width * 0.1,
    borderRadius: width / 2,
  },
  inputTxt: {
    fontSize: width * 0.038,
    fontFamily: fonts.Regular,
    width: '65%',
  },
  leftInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.05,
  },
  righInputWrapper: {},
  addCommentBtn: {
    backgroundColor: '#040bd1',
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.005,
    borderRadius: width / 2,
  },
  downSwipeMark: {
    width: '15%',
    height: height * 0.002,
    backgroundColor: 'red',
    position: 'absolute',
    left: '43%',
    borderRadius: width * 0.05,
  },
  commentWrapper: {
    paddingHorizontal: width * 0.04,
  },
  commentListbox: {
    // backgroundColor: 'red',
    marginBottom: height * 0.02,
    flexDirection: 'row',
    paddingVertical: height * 0.01,
    justifyContent: 'space-between',
  },
  leftbox: {
    flexDirection: 'row',
    gap: width * 0.02,
  },
  userTitleWrapper: {
    width: '40%',
    flexWrap: 'wrap',
  },
  titleNTimeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  timeTxt: {
    fontSize: width * 0.028,
    color: 'grey',
  },
  rightBox: {},
  titleTxt: {
    fontSize: width * 0.027,
    color: 'black',
    fontFamily: fonts.Semibold,
  },
  commTxt: {
    fontSize: width * 0.031,
  },
  replyInput: {
    fontSize: width * 0.03,
    fontFamily: fonts.Semibold,
  },
});
