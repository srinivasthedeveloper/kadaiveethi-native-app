import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './App/screens/login/Welcome';
import Login from './App/screens/login/Login';
import Signup from './App/screens/login/Signup';
import Onboarding from './App/screens/onboarding/Onboarding';
import MobileLogin from './App/screens/onboarding/MobileLogin';
import OtpVerify from './App/screens/onboarding/OtpVerify';
import CitySelect from './App/screens/onboarding/CitySelect';

const Stack = createStackNavigator();

export default function App() {
  const OnboardingFlow = () => {
    return (
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="MobileLogin"
          component={MobileLogin}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="OtpVerify"
          component={OtpVerify}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="CitySelect"
          component={CitySelect}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    );
  };

  const LoginFlow = () => {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="OnboardingFlow"
          component={OnboardingFlow}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="LoginFlow"
          component={LoginFlow}
          options={{headerShown: false, headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
