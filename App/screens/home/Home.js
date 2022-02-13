import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import InputField from '../../components/InputField';

import Dashboard from './Dashboard';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Bottomtab = createBottomTabNavigator();

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container} keyboardShouldPersistTaps="always">
      <Bottomtab.Navigator
        screenOptions={{
          tabBarStyle: {
            justifyContent: 'space-between',
          },
          headerShown: false,
          tabBarIcon: ({ tintColor }) => null,
          title: '',
        }}>
        <Bottomtab.Screen
          name="Dashboard"
          children={() => <Dashboard {...props} />}
          options={{
            tabBarLabel: tabInfo => {
              return tabInfo.focused ? (
                <View style={{...styles.inActiveView}}>
                  <Image
                    source={require('../../icons/home/home.png')}
                    style={{...styles.iconStyle}}
                    style={{tintColor: AppColor.green}}
                  />
                  <CText style={{...styles.activeText}}>Shop</CText>
                </View>
              ) : (
                <View style={{...styles.inActiveView, borderBottomWidth: 0}}>
                  <Image
                    source={require('../../icons/home/home.png')}
                    style={{...styles.iconStyle}}
                  />
                  <CText style={{...styles.activeText, color: AppColor.black}}>
                    Shop
                  </CText>
                </View>
              );
            },
          }}
        />

        <Bottomtab.Screen
          name="Explore"
          children={() => <Dashboard {...props} />}
          options={{
            tabBarLabel: tabInfo => {
              return tabInfo.focused ? (
                <View style={{...styles.inActiveView}}>
                  <Image
                    source={require('../../icons/home/explore.png')}
                    style={{...styles.iconStyle}}
                    style={{tintColor: AppColor.green}}
                  />
                  <CText style={{...styles.activeText}}>Explore</CText>
                </View>
              ) : (
                <View style={{...styles.inActiveView, borderBottomWidth: 0}}>
                  <Image
                    source={require('../../icons/home/explore.png')}
                    style={{...styles.iconStyle}}
                  />
                  <CText style={{...styles.activeText, color: AppColor.black}}>
                    Explore
                  </CText>
                </View>
              );
            },
          }}
        />

        <Bottomtab.Screen
          name="Cart"
          children={() => <Dashboard {...props} />}
          options={{
            tabBarLabel: tabInfo => {
              return tabInfo.focused ? (
                <View style={{...styles.inActiveView}}>
                  <Image
                    source={require('../../icons/home/cart.png')}
                    style={{...styles.iconStyle}}
                    style={{tintColor: AppColor.green}}
                  />
                  <CText style={{...styles.activeText}}>Cart</CText>
                </View>
              ) : (
                <View style={{...styles.inActiveView, borderBottomWidth: 0}}>
                  <Image
                    source={require('../../icons/home/cart.png')}
                    style={{...styles.iconStyle}}
                  />
                  <CText style={{...styles.activeText, color: AppColor.black}}>
                    Cart
                  </CText>
                </View>
              );
            },
          }}
        />

        <Bottomtab.Screen
          name="Favorite"
          children={() => <Dashboard {...props} />}
          options={{
            tabBarLabel: tabInfo => {
              return tabInfo.focused ? (
                <View style={{...styles.inActiveView}}>
                  <Image
                    source={require('../../icons/home/favorite.png')}
                    style={{...styles.iconStyle}}
                    style={{tintColor: AppColor.green}}
                  />
                  <CText style={{...styles.activeText}}>Favorite</CText>
                </View>
              ) : (
                <View style={{...styles.inActiveView, borderBottomWidth: 0}}>
                  <Image
                    source={require('../../icons/home/favorite.png')}
                    style={{...styles.iconStyle}}
                  />
                  <CText style={{...styles.activeText, color: AppColor.black}}>
                    Favorite
                  </CText>
                </View>
              );
            },
          }}
        />

        <Bottomtab.Screen
          name="Account"
          children={() => <Dashboard {...props} />}
          options={{
            tabBarLabel: tabInfo => {
              return tabInfo.focused ? (
                <View style={{...styles.inActiveView}}>
                  <Image
                    source={require('../../icons/home/account.png')}
                    style={{...styles.iconStyle}}
                    style={{tintColor: AppColor.green}}
                  />
                  <CText style={{...styles.activeText}}>Account</CText>
                </View>
              ) : (
                <View style={{...styles.inActiveView, borderBottomWidth: 0}}>
                  <Image
                    source={require('../../icons/home/account.png')}
                    style={{...styles.iconStyle}}
                  />
                  <CText style={{...styles.activeText, color: AppColor.black}}>
                    Account
                  </CText>
                </View>
              );
            },
          }}
        />
      </Bottomtab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  inActiveView: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: AppColor.green,
    justifyContent: 'space-between',
  },
  iconStyle: {alignSelf: 'center'},
  activeText: {
    color: AppColor.green,
    fontSize: 12,
    fontFamily: AppFonts.semiBold,
    textAlign: 'center',
  },
});
