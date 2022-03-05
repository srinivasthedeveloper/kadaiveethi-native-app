import React from 'react';
import {Text} from 'react-native';
import AppColor from '../constants/AppColor';
import AppFonts from '../constants/AppFonts';

export default function CText(props) {
  return (
    <Text {...props} style={{fontFamily: AppFonts.medium,fontSize:16,color:AppColor.black, ...props.style}}>
      {props.children}
    </Text>
  );
}
