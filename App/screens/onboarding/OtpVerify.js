import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RoundButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField';
import {useHeaderHeight} from '@react-navigation/elements';

export default function OtpVerify(props) {
  const [value, setValue] = useState('');
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
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        <CText
          style={{
            ...styles.heading,
            marginTop: StatusBar.currentHeight + headerHeight,
          }}
        >
          Enter your 4-digit code
        </CText>
        <InputField
          label="Code"
          placeHolder="----"
          containerStyle={{marginTop: 30}}
          textInputprops={{maxLength: 4, keyboardType: 'numeric'}}
          value={value}
          bindValue={e => setValue(e)}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <CText style={{...styles.resendStyle}}>Resend Otp</CText>
        </TouchableOpacity>
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
          onPress={() => props.navigation.navigate('CitySelect')}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resendStyle: {
    fontFamily: AppFonts.medium,
    color: AppColor.green,
    fontSize: 18,
  },
});
