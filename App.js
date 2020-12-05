import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Transaction from './src/features/transactions/screens/transaction_screen';
import {StateProvider} from './src/utils/context';

const App = () => {
  // first create initialState  obj.
  const initialState = {sortBy: ''};

  // added reducer 
  const reducer = (state, action) => {
    switch (action.type) {
      case 'sortingBy':
        return {
          ...state,
          sortBy: action.sortingBy,
        };
      // other case
      default:
        return state;
    }
  };
  return (
    // added Provider
    // given initialState and reducer in stateProvider.
    <StateProvider initialState={initialState} reducer={reducer}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <Transaction />
        </SafeAreaView>
    </StateProvider>
  );
};

export default App;
