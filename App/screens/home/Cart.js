import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {PrimaryButton, RoundButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';

let favorites = [
  {
    name: 'Apple',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
    value: "1",
  },
  {
    name: 'Bracolli',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
    value: "1",
  },
  {
    name: 'Coliflower',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
    value: "1",
  },
  {
    name: 'Drumstick',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
    value: "1",
  },
  {
    name: 'Egg',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
    value: "1",
  },
];

export default function Cart(props) {
  return (
    <View style={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <CText style={{...styles.headText}}>My Cart</CText>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item,index}) => (
          <View style={{...styles.favContainerStyle}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  marginRight: 20,
                  alignSelf: 'center',
                }}
              />
              <View>
                <CText style={{fontFamily: AppFonts.semiBold}}>
                  {item.name}
                </CText>
                <CText
                  style={{
                    fontSize: 14,
                    color: AppColor.descGrey,
                    fontFamily: AppFonts.regular,
                  }}>
                  {item.quantity}kg
                </CText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <RoundButton
                    icon={require('../../icons/home/-.png')}
                    iconStyle={{width: 17, height: 3, marginRight: 0}}
                    buttonStyle={{
                      ...styles.roundButtonStyle,
                    }}
                  />
                  <TextInput
                    placeholder=""
                    defaultValue="1"
                    keyboardType="numeric"
                    value={item.value}
                    style={{
                      borderWidth: 0,
                      marginHorizontal: 5,
                      color: AppColor.black,
                      textAlign: 'center',
                    }}
                  />
                  <RoundButton
                    icon={require('../../icons/home/+.png')}
                    iconStyle={{
                      width: 17,
                      height: 17,
                      tintColor: AppColor.green,
                      marginRight: 0,
                    }}
                    buttonStyle={{
                      ...styles.roundButtonStyle,
                      paddingVertical: 10,
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={()=>favorites.pop(index)}>
                <Image
                  source={require('../../icons/home/close.png')}
                  style={{
                    alignSelf: 'flex-end',
                    tintColor: AppColor.placeholderGrey,
                  }}
                />
              </TouchableOpacity>
              <CText style={{marginTop: 50, marginRight: 20}}>
              ₹{item.price}
              </CText>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => `Cart-${index}`}
      />
      <PrimaryButton title="Go to Checkout" buttonStyle={{margin: 20}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headText: {
    fontFamily: AppFonts.medium,
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.lineGrey,
  },
  favContainerStyle: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: AppColor.lineGrey,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundButtonStyle: {
    backgroundColor: 'transparent',
    borderColor: AppColor.lineGrey,
    borderWidth: 1,
    paddingVertical: 17,
    padding: 10,
    borderRadius: 17,
  },
});
