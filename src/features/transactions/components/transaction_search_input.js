import React from 'react';
import {View, Image, TextInput, Text} from 'react-native';

import {styles} from '../styles/transaction_search_input.styles';
import {SortButton} from '../components/sort_button';
import {ASSET_ICONS} from '../../../utils/icons';
import {COLORS} from '../../../utils/colors';

export const SearchInput = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image style={styles.search_icon} source={ASSET_ICONS.ICON_SEARCH} />
      </View>
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        placeholderTextColor={COLORS.LIGHT_GRAY}
        onChangeText={onChangeText}
      />
      <SortButton />
    </View>
  );
};
