import React from 'react';
import {StatusBar, View} from 'react-native';
import AppStack from './src/navigations/AppStack';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#3871ff" barStyle="default" />
      <AppStack />
    </View>
  );
};

export default App;
