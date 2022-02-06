import React, { useEffect } from 'react';
import {View, StyleSheet, ImageBackground, Dimensions, ScrollView} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';

import SplashScreen from "react-native-splash-screen";

export default function Welcome(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../images/Login/welcomeBG.png')}
        style={{
          flex: 1,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}>
        <View style={styles.footer}>
          <CText style={styles.heading}>Welcome to our store</CText>
          <CText style={styles.content}>
            Get your groceries in as fast as one hour
          </CText>
          <PrimaryButton title="Get Started" buttonStyle={{marginTop: 40}} onPress={()=>{props.navigation.navigate("OnboardingFlow")}} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: Dimensions.get('screen').height * 0.53,
    paddingHorizontal:20,
  },
  heading: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: AppFonts.semiBold,
    paddingHorizontal: 30,
  },
  content: {
    color: AppColor.lightWhite,
    fontFamily: AppFonts.medium,
    textAlign:'center',
  },
});
