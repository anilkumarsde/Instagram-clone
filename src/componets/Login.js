import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
const {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';

const items = [
  {
    id: 1,
    image: require('../images/img1.jpeg'),

    title: 'Experience the legacy of 25+ Years.',
  },
  {
    id: 2,
    image: require('../images/img1.jpeg'),

    title: 'Experience the legacy of 25+ Years.',
  },
  {
    id: 3,
    image: require('../images/img1.jpeg'),

    title: 'Experience the legacy of 25+ Years.',
  },
  {
    id: 4,
    image: require('../images/img1.jpeg'),

    title: 'Experience the legacy of 25+ Years.',
  },
];

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'orange'} barStyle={'dark-content'} />
      <LinearGradient colors={['orange', 'red']} style={styles.LinearGradient}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Image
              source={require('../images/title.jpeg')}
              style={styles.titleImg}
            />
          </View>
          <View style={styles.swiperWrapper}>
            {/* swiper */}

            <Swiper
              autoplayTimeout={2}
              paginationStyle={{
                position: 'absolute',
                bottom: height * 0.001,
                left: width * 0.7,
              }}
              // dotStyle={{position:'absolute',bottom:2,left:20}}
              activeDotColor="#5c0319"
              dotColor="white">
              {items.map(item => (
                <View key={item.id} style={styles.swiperBox}>
                  <Image source={item.image} style={styles.swiperImg} />
                  <View style={{width:110}}>

                  <Text style={styles.swipwerTitle}>{item.title}</Text>
                  </View>
                </View>
              ))}
            </Swiper>
          </View>

          <View style={styles.welcomeWrapper}>
            <Text style={styles.subTitle}>Hi,Invincible</Text>
            <Text style={styles.welcomeTitle}>Welcome to Arihant Plus!</Text>
          </View>
          <View style={styles.createAccountWrapper}>
            <Text style={styles.createAccountTitle}>
              To Create your account
            </Text>
            <Text style={styles.messageText}>
              please enter your mobile number.We will send you a One-Time
              Password(OTP) via SMS
            </Text>
          </View>
          <View style={styles.mbInputBox}>
            <TextInput placeholder="+91" style={styles.countryCode} />

            <TextInput
              placeholder="Enter your Mobile No"
              style={styles.mobileNumBox}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.otpBtnWrapper}>
            <TouchableOpacity style={styles.otpButton}>
              <Text style={styles.otpText}>Get OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orWrapper}>
            <View style={styles.orWidth} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orWidth} />
          </View>
          {/* <View style={styles.googleLoginWrapper}> */}
          <TouchableOpacity style={styles.googleBtn}>
            <View style={{marginLeft: 10}}>
              <Image
                source={require('../images/googleLogo.jpeg')}
                style={styles.googleLogo}
              />
            </View>
            <View style={{width: '100%'}}>
              <Text style={styles.googleText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: '#f7f6f2',
    // marginVertical: height * 0.08,
    marginTop: height * 0.08,
    // height: height * 0.7,
    marginHorizontal: width * 0.05,
    // borderRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    elevation: 1,
  },
  titleImg: {
    height: height * 0.04,
    width: width * 0.9,
    resizeMode: 'contain',
  },
  title: {
    paddingVertical: height * 0.012,
  },
  swiperWrapper: {
    backgroundColor: 'orange',
    height: height * 0.2,

    paddingVertical:height*0.023,
  },

  swiperBox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: height*0.02,
    gap: width*0.01,
    // alignItems: 'center',
    // marginTop: 25,
    // justifyContent:'space-between',
    // paddingHorizontal: width * 0.01,
    // // paddingVertical:height*0.02
  },
  swiperImg: {
    height: height * 0.1,
    width: width * 0.15,
    borderRadius: width * 0.01,
    // backgroundColor:'red',
    // resizeMode:'contain'
  },
  welcomeWrapper: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  swipwerTitle: {
    fontSize: width * 0.026,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'grey',
    fontWeight: '400',
  },
  welcomeTitle: {
    fontSize: width * 0.05,
  },
  createAccountWrapper: {
    marginTop: width * 0.025,
    paddingHorizontal: width * 0.05,
  },
  createAccountTitle: {
    textAlign: 'center',
    fontSize: width * 0.04,
  },
  messageText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: width * 0.029,
  },
  mbInputBox: {
    marginVertical: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.03,
    // backgroundColor:'red'
  },
  countryCode: {
    borderWidth: 1,
    marginRight: width * 0.04,
    borderRadius: width * 0.01,
    textAlign: 'center',
    width: width * 0.15,
  },
  mobileNumBox: {
    borderWidth: 1,
    flex: 1,
    borderRadius: width * 0.01,
    paddingHorizontal: width * 0.04,
    color: 'grey',
    // backgroundColor:'red'
  },
  otpBtnWrapper: {
    marginHorizontal: width * 0.03,
    marginBottom: height * 0.02,
  },
  otpButton: {
    backgroundColor: '#5c0319',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.067,
    paddingVertical: height * 0.017,
  },
  otpText: {
    color: 'white',
    fontWeight: '500',
    fontSize: width * 0.03,
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.06,
    marginBottom: height * 0.02,
  },
  orWidth: {
    borderBottomWidth: 1,
    width: '35%',
    height: 1,
  },
  orText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'grey',
    marginHorizontal: 15,
  },
  googleLoginWrapper: {
    // marginVertical: height * 0.01,
    // marginTop:height*0.02,

    marginHorizontal: width * 0.06,
    // backgroundColor: 'red',
  },
  googleBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: width * 0.03,
    // padding: width * 0.03,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.02,
    // backgroundColor:'blue',
    marginBottom: height * 0.03,
  },

  googleLogo: {
    height: height * 0.029,
    width: width * 0.06,
  },
  googleText: {
    // marginLeft: width * 0.03,
    textAlign: 'center',
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // marginTop: height * 0.03,
    // backgroundColor:'red',
    paddingVertical: height * 0.02,
    marginHorizontal: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
  },
  accountText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'grey',
  },
  loginText: {
    color: 'red',
    // fontSize:width*0.02
  },
});
