import React, {useEffect, useState} from 'react';
import { Alert, View, Text} from 'react-native';

import {styles} from '../styles/transaction_detail_screen.styles';
import {COLORS} from '../../../utils/colors';

export default ({route, navigation}) => {
  const { id,
    beneficiary_bank,
    beneficiary_name,
    sender_bank,
    amount,
    created_at,
    unique_code,
    account_number } = route.params;

  return (
    <>
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>ID TRANSAKSI: #{id}</Text>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <Text>{beneficiary_name}</Text>
      <Text>{account_number}</Text>
    </View>
      <Text>{beneficiary_bank}</Text>
      <Text>{sender_bank}</Text>
      <Text>{amount}</Text>
      <Text>{created_at}</Text>
      <Text>{unique_code}</Text>
    </>
  )
}