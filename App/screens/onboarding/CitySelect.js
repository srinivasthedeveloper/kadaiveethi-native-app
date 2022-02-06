import React, {useLayoutEffect} from 'react';
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
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: e => (
        <TouchableOpacity {...e}>
          <Image
            source={require('../../icons/back.png')}
            style={{marginLeft: 20}}
          />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);
  return (
    <KeyboardAwareScrollView
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
          source={require('../../images/Onboarding/map.png')}
          style={{
            marginTop:
              Platform.OS === 'ios' ? 60 : StatusBar.currentHeight + 30,
          }}
        />
      </ImageBackground>
      <View style={styles.body}>
        <CText style={styles.heading}>Select Your Location</CText>
        <CText style={{...styles.desc, marginBottom: 10, textAlign: 'center'}}>
          Switch on your location to stay in tune with what’s happening in your
          area
        </CText>
        <InputField
          label="Your Zone"
          placeHolder="Enter your zone"
          containerStyle={{marginTop: 30}}
        />
        <InputField
          label="Your Area"
          placeHolder="Enter your area"
          containerStyle={{marginTop: 30}}
        />
      </View>
      <View style={styles.footer}>
        <PrimaryButton title="Submit" />
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
    height: Dimensions.get('screen').height * 0.3,
  },
  body: {
    padding: 20,
    paddingTop: 0,
  },
  heading: {
    fontSize: 26,
    fontFamily: AppFonts.semiBold,
    textAlign: 'center',
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
