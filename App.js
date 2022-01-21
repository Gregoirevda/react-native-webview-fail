import React, {useRef, useState} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import WebView from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <WebView
        source={{
          html: '<h1> Hello world!</h1>',
        }}
        style={{
          height: 50,
          backgroundColor: 'yellow',
          marginTop: 50,
        }}
      />
      <View
        style={{
          backgroundColor: 'green',
          height: 1000,
        }}>
        <Text style={{color: 'white'}}>Scroll Down!</Text>
      </View>
      <Button onPress={() => navigation.push('Settings')} title="Press" />
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}
