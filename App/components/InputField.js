import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CText from '../components/Text';
import AppColor from '../constants/AppColor';
import AppFonts from '../constants/AppFonts';

export default function InputField({
  label,
  bindValue = () => {},
  value,
  placeHolder,
  isPassword = false,
  disabled,
  rightIcon,
  preValue,
  leftIcon,
  textInputprops,
  containerStyle,
  labelStyle,
  inputStyle,
  placeHolderColor,
  iconContainer,
  leftIconContainer,
  preValueStyle,
  rightIconContainer,
  iconStyle,
  rightIconStyle,
  leftIconStyle,
}) {
  const [hidePassword, setHidePassword] = useState(true);
  const [fieldvalue, setFieldValue] = useState(value);
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <CText style={{...styles.labelStyle, ...labelStyle}}>{label}</CText>
      <View style={{flexDirection: 'row'}}>
        {leftIcon && (
          <View style={{...styles.iconContainer, ...leftIconContainer}}>
            <Image
              source={leftIcon}
              style={{
                ...styles.iconStyle,
                marginRight: 10,
                marginLeft: 10,
                ...leftIconStyle,
              }}
            />
          </View>
        )}
        {preValue && (
          <CText
            style={{
              ...styles.inputStyle,
              flex: 0,
              textAlignVertical: 'center',
              paddingHorizontal: 5,
              ...preValueStyle,
            }}>
            {preValue}
          </CText>
        )}
        <TextInput
          disabled={disabled}
          placeholder={placeHolder}
          value={value}
          placeholderTextColor={placeHolderColor || AppColor.placeholderGrey}
          style={{...styles.inputStyle, ...inputStyle}}
          secureTextEntry={hidePassword && isPassword}
          onChangeText={e => {
            bindValue(e);
            setFieldValue(e);
          }}
          {...textInputprops}
        />
        {isPassword && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setHidePassword(!hidePassword)}
            style={{...styles.iconContainer, ...iconContainer}}>
            <Image
              source={
                hidePassword
                  ? require('../icons/Login/eye-slash.png')
                  : require('../icons/Login/eye.png')
              }
              style={{...styles.iconStyle, ...iconStyle}}
            />
          </TouchableOpacity>
        )}
        {!isPassword && rightIcon && (
          <View style={{...styles.iconContainer, ...rightIconContainer}}>
            <Image
              source={rightIcon}
              style={{...styles.iconStyle, ...rightIconStyle}}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    color: AppColor.descGrey,
    fontFamily: AppFonts.medium,
    fontSize: 16,
  },
  inputStyle: {
    color: AppColor.black,
    fontSize: 18,
    fontFamily: AppFonts.regular,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: AppColor.lineGrey,
  },
  iconContainer: {
    justifyContent: 'center',
    borderBottomColor: AppColor.lineGrey,
    borderBottomWidth: 1,
  },
  iconStyle: {alignSelf: 'center', marginRight: 20},
});
