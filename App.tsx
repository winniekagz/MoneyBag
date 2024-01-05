/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from './components/colors';
import Rootstack from './components/navigators/rootstack';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <Rootstack />
    </SafeAreaView>
  );
}

export default App;
export const Fonts = StyleSheet.create({
  container: {padding: 10},
  Bold: {fontFamily: 'Lato-Bold'},

  Regular: {fontFamily: 'Lato-Regular'},
});
