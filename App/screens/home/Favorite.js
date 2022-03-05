import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';

const favorites = [
  {
    name: 'Apple',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
  },
  {
    name: 'Bracolli',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
  },
  {
    name: 'Coliflower',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
  },
  {
    name: 'Drumstick',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
  },
  {
    name: 'Egg',
    image: require('../../images/Login/logo.png'),
    quantity: 1,
    price: 100,
  },
];

export default function Favorite(props) {
  return (
    <View style={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <CText style={{...styles.headText}}>Favorite</CText>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{...styles.favContainerStyle}}>
            <View style={{flexDirection:'row'}}>
              <Image
                source={item.image}
                style={{width: 50, height: 50, resizeMode: 'contain',marginRight:20}}
              />
              <View>
                <CText style={{fontFamily:AppFonts.semiBold}}>{item.name}</CText>
                <CText style={{fontSize:14,color:AppColor.descGrey,fontFamily:AppFonts.regular}}>{item.quantity}kg</CText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CText>₹{item.price}</CText>
              <Image
                source={require('../../icons/Vector.png')}
                style={{tintColor: AppColor.black, alignSelf: 'center',marginLeft:14}}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => `favItem-${index}`}
      />
      <PrimaryButton title="Add All To Cart" buttonStyle={{margin:20}} />
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
    marginHorizontal:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
});
