import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField';

export default function Login(props) {
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={100}
      enableOnAndroid={true}
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <ImageBackground
        source={require('../../images/Login/glassyBg.png')}
        style={{
          ...styles.header,
          resizeMode: 'stretch',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../images/Login/logo.png')}
          style={{
            marginTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
          }}
        />
      </ImageBackground>
      <View style={styles.body}>
        <CText style={styles.heading}>Login</CText>
        <CText style={{...styles.desc, marginBottom: 10}}>
          Enter your emails and password
        </CText>
        <InputField
          label="Email"
          placeHolder="Enter your e-mail"
          containerStyle={{marginTop: 30}}
        />
        <InputField
          label="Password"
          placeHolder="Enter passoword"
          isPassword
          containerStyle={{marginTop: 30}}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <CText style={{...styles.desc, marginTop: 15, textAlign: 'right'}}>
            forgot password?
          </CText>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          title="Login"
          onPress={() => props.navigation.replace('HomeStack')}
        />
        <View
          style={{flexDirection: 'row', marginTop: 25, alignSelf: 'center'}}>
          <CText
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 14,
              color: AppColor.black,
            }}>
            Don’t have an account?{' '}
          </CText>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.replace('Signup')}>
            <CText
              style={{
                fontFamily: AppFonts.semiBold,
                fontSize: 14,
                color: AppColor.green,
              }}>
              Singup
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: Dimensions.get('screen').height * 0.23,
  },
  body: {
    padding: 20,
    paddingTop: 0,
  },
  heading: {
    fontSize: 26,
    fontFamily: AppFonts.semiBold,
  },
  desc: {
    color: AppColor.descGrey,
    fontFamily: AppFonts.medium,
    fontSize: 16,
  },
  inputStyle: {
    color: AppColor.black,
    fontSize: 18,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: AppColor.lineGrey,
  },
  footer: {
    paddingHorizontal: 20,
    marginTop: Dimensions.get('screen').height * 0.1,
  },
});
