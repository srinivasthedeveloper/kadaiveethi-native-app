import React, {useState} from 'react';
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

export default function Account(props) {
  const [profileData, setProfileData] = useState([
    {
      name: 'Orders',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'My Details',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'Delivery Address',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'Payment Methods',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'Promo Card',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'Notifications',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'Help',
      icon: require('../../icons/home/favorite.png'),
    },
    {
      name: 'About',
      icon: require('../../icons/home/favorite.png'),
    },
  ]);

  return (
    <View style={styles.container} keyboardShouldPersistTaps="always">
      <View style={{...styles.profileContainer}}>
        <Image
          source={require('../../icons/home/profile.png')}
          style={{width: 64, height: 64, marginRight: 20}}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <CText>Jhon doe</CText>
            <TouchableOpacity>
              <Image
                source={require('../../icons/home/edit.png')}
                style={{marginLeft: 30}}
              />
            </TouchableOpacity>
          </View>
          <CText>jhondoe@void.com</CText>
        </View>
      </View>
      <FlatList
        data={profileData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              ...styles.profileContainer,
              paddingBottom: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={item.icon} style={{marginRight: 20}} />
              <CText>{item.name}</CText>
            </View>
            <Image
              source={require('../../icons/Vector.png')}
              style={{tintColor: AppColor.black}}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => `AccountMenu-${index}`}
      />
      <PrimaryButton
        title="Log Out"
        titleStyle={{color: AppColor.green,fontFamily:AppFonts.medium}}
        leftIconStyle={{
          position: 'absolute',
          left: 30,
          tintColor: AppColor.green,
          width:18,
          height:18,
          resizeMode:'contain',
        }}
        buttonStyle={{
          margin: 20,
          backgroundColor: AppColor.searchGrey,
          justifyContent: 'center',
        }}
        leftIcon={require('../../icons/home/logout.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30,
    borderBottomColor: AppColor.lineGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});
