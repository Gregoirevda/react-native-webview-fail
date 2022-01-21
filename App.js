import React from 'react';
import type {Node} from 'react';
import {ScrollView, Text, View} from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'green',
          }}>
          <Text>Some text</Text>
        </View>
      </ScrollView>
    </>
  );
}
