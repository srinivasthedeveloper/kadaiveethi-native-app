import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Text from '../components/Text';
import AppColor from '../constants/AppColor';
import AppFonts from '../constants/AppFonts';

export const PrimaryButton = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.primaryButton,
        ...props.buttonStyle,
      }}
      activeOpacity={0.7}
      disabled={props.disabled}
      onPress={props.onPress}
      accessibilityState={{disabled: props.disabled}}>
      {props.leftIcon ? (
        <Image
          source={props.leftIcon}
          style={{
            ...styles.iconStyle,
            opacity: props.disabled ? 0.4 : 1,
            ...props.leftIconStyle,
          }}
        />
      ) : null}
      <Text style={{...styles.primaryTitle, ...props.titleStyle}}>
        {props.title}
      </Text>
      {props.rightIcon ? (
        <Image
          source={props.rightIcon}
          style={{
            ...styles.iconStyle,
            opacity: props.disabled ? 0.4 : 1,
            ...props.rightIconStyle,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export const RoundButton = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.primaryButton,
        justifyContent:'center',
        ...props.buttonStyle,
      }}
      activeOpacity={0.7}
      disabled={props.disabled}
      onPress={props.onPress}
      accessibilityState={{disabled: props.disabled}}>
      {props.icon ? (
        <Image
          source={props.icon}
          style={{
            ...styles.iconStyle,
            opacity: props.disabled ? 0.4 : 1,
            ...props.iconStyle,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: AppColor.green,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  primaryTitle: {
    fontSize: 18,
    fontFamily: AppFonts.semiBold,
    color: AppColor.white,
  },
  iconStyle: {
    marginRight: 5,
    width: 12,
    height: 12,
  },
});
