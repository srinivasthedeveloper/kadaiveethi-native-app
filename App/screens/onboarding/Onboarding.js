import React from 'react';
import {
  View,
  ScrollView,
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
import InputField from '../../components/InputField';

export default function Onboarding(props) {
  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <ImageBackground
        source={require('../../images/Onboarding/headveg.png')}
        style={{
          ...styles.header,
          resizeMode: 'stretch',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      </ImageBackground>
      <View style={styles.footer}>
        <CText style={styles.heading}>Get your groceries with KadaiViidhi</CText>
        <TouchableOpacity activeOpacity={.5} onPress={()=>props.navigation.navigate("MobileLogin")}>
        <InputField
          disabled={true}
          preValue="+91"
          containerStyle={{marginTop: 30,disabled:true}}
          leftIcon={require("../../icons/Onboarding/flag.png")}
          textInputprops={{editable:false,selectTextOnFocus:false}}
        />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5}>
          <CText style={{...styles.desc, marginVertical: 30, textAlign: 'center'}}>
          Or connect with social media
          </CText>
          </TouchableOpacity>
        <PrimaryButton
          title="Continue with Google"
          buttonStyle={{marginBottom: 20, backgroundColor: AppColor.blue}}
          leftIcon={require("../../icons/Onboarding/google.png")}
          leftIconStyle={{width:24,height:25,resizeMode:'contain'}}
        />
        <PrimaryButton
          title="Continue with Facebook"
          buttonStyle={{backgroundColor: AppColor.darkBlue}}
          leftIcon={require("../../icons/Onboarding/fb.png")}
          leftIconStyle={{width:12,height:25,resizeMode:'contain'}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: Dimensions.get('screen').height * 0.5,
  },
  heading: {
    fontSize: 26,
    fontFamily: AppFonts.semiBold,
    width:250,
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
    marginTop:-100,
  },
});
