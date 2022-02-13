import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {PrimaryButton, RoundButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import InputField from '../../components/InputField';
import AppIntroSlider from 'react-native-app-intro-slider';
import SearchBar from '../../components/SearchBar';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#22b1b5',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Title 3',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#f9555b',
  },
];

const temp = [
  {
    image: require('../../images/Login/logo.png'),
    name: 'apple',
    quantity: '1kg',
    price: '100',
  },
  {
    image: require('../../images/Login/logo.png'),
    name: 'apple',
    quantity: '1kg',
    price: '100',
  },
  {
    image: require('../../images/Login/logo.png'),
    name: 'apple',
    quantity: '1kg',
    price: '100',
  },
  {
    image: require('../../images/Login/logo.png'),
    name: 'apple',
    quantity: '1kg',
    price: '100',
  },
];

const renderOffers = item => (
  <View style={{...styles.offerContainer}}>
    <View>
      <Image source={item.image} style={{alignSelf: 'center'}} />
      <CText style={{fontFamily: AppFonts.bold}} numberOfLines={2}>
        {item.name}
      </CText>
      <CText
        style={{
          color: AppColor.descGrey,
          fontSize: 14,
          fontFamily: AppFonts.regular,
        }}>
        {item.quantity}
      </CText>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <CText style={{fontFamily: AppFonts.medium}}>₹{item.price}</CText>
      <RoundButton
        icon={require('../../icons/home/+.png')}
        iconStyle={{width: 17, height: 17, marginRight: 0}}
        buttonStyle={{paddingHorizontal: 14, paddingVertical: 15}}
      />
    </View>
  </View>
);

export default function Dashboard(props) {
  const renderSlider = ({item}) => (
    <View
      style={{
        backgroundColor: item.backgroundColor,
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CText>{item.title}</CText>
    </View>
  );

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <Image source={require('../../images/Login/logo.png')} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../icons/home/location.png')}
            style={{marginRight: 4, alignSelf: 'center'}}
          />
          <CText style={{...styles.headText}}>Kinathukedavu, India</CText>
        </View>
      </View>
      <SearchBar data={[{id: 1, title: 'apple'}]} />
      <View style={{height: 120, marginHorizontal: 20, marginBottom: 20}}>
        <AppIntroSlider
          data={slides}
          renderItem={renderSlider}
          showDoneButton={false}
          showNextButton={false}
          showSkipButton={false}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={{...styles.offerHeaderView}}>
          <CText style={{...styles.offerHeader}}>Exclusive Offer</CText>
          <TouchableOpacity activeOpacity={0.5}>
            <CText style={{color: AppColor.green, fontFamily: AppFonts.medium}}>
              See all
            </CText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={temp}
          horizontal
          renderItem={({item}) => renderOffers(item)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({index}) => index}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={{...styles.offerHeaderView}}>
          <CText style={{...styles.offerHeader}}>Best Selling</CText>
          <TouchableOpacity activeOpacity={0.5}>
            <CText style={{color: AppColor.green, fontFamily: AppFonts.medium}}>
              See all
            </CText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={temp}
          horizontal
          renderItem={({item}) => renderOffers(item)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({index}) => index}
        />
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <View style={{...styles.offerHeaderView}}>
          <CText style={{...styles.offerHeader}}>Groceries</CText>
          <TouchableOpacity activeOpacity={0.5}>
            <CText style={{color: AppColor.green, fontFamily: AppFonts.medium}}>
              See all
            </CText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={slides}
          horizontal
          renderItem={({item}) => (
            <View
              style={{
                ...styles.miniSliderStyle,
                backgroundColor: item.backgroundColor,
              }}>
              <Image
                source={require('../../images/Login/logo.png')}
                style={{margin:15}}
              />
              <CText style={{width: '40%', paddingRight: 10}} numberOfLines={2}>
                {item.title}
              </CText>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({index}) => index}
        />
        <FlatList
          data={temp}
          horizontal
          renderItem={({item}) => renderOffers(item)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({index}) => index}
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
    alignItems: 'center',
  },
  headText: {
    fontFamily: AppFonts.bold,
    color: AppColor.darkGrey,
  },
  offerContainer: {
    borderWidth: 1,
    borderColor: AppColor.lineGrey,
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginRight: 14,
    maxWidth: 150,
    justifyContent: 'space-between',
  },
  offerHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerHeader: {
    fontSize: 24,
    fontFamily: AppFonts.medium,
    marginVertical: 20,
  },
  miniSliderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    marginBottom: 20,
    borderRadius: 18,
    maxWidth: 250,
    maxHeight:100,
  },
});
