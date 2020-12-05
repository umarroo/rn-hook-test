import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {COLORS} from './src/utils/colors';
import Transaction from './src/features/transactions/screens/transaction_screen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.BRIGHT_RED} />
      <SafeAreaView style={{flex: 1}}>
        <Transaction />
      </SafeAreaView>
    </>
  );
};

export default App;
