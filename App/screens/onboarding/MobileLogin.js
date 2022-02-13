import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {RoundButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField';
import {useHeaderHeight} from '@react-navigation/elements';

export default function MobileLogin(props) {
  const headerHeight = useHeaderHeight();
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
      extraScrollHeight={100}
      enableOnAndroid={true}
      style={styles.container}>
      <View>
        <CText
          style={{
            ...styles.heading,
            marginTop: StatusBar.currentHeight + headerHeight,
          }}>
          Enter your mobile number
        </CText>
        <InputField
          preValue="+91"
          label="Mobile Number"
          containerStyle={{marginTop: 30}}
          leftIcon={require('../../icons/Onboarding/flag.png')}
        />
      </View>
      <View style={styles.footer}>
        <RoundButton
          icon={require('../../icons/Vector.png')}
          buttonStyle={{
            width: 67,
            height: 67,
            borderRadius: 50,
            alignSelf: 'flex-end',
          }}
          iconStyle={{
            marginRight: 0,
            width: 10,
            height: 18,
            alignSelf: 'center',
          }}
          onPress={() => props.navigation.navigate('OtpVerify')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    borderBottomWidth: 1,
    borderColor: AppColor.lineGrey,
  },
  footer: {
    marginTop: Dimensions.get('screen').height * 0.45,
  },
});
