import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../styles/transaction_list.styles';
import {ASSET_ICONS} from '../../../utils/icons';
import {COLORS} from '../../../utils/colors';
import {toUpperCase, formatNumber, formatDate} from '../../../utils/helpers';

const PRIMARY_COLOR = {
  SUCCESS: COLORS.MODERATE_CYAN_LIME_GREEN,
  PENDING: COLORS.BRIGHT_RED,
  FAIL: COLORS.STRONG_RED,
};

const TEXT_STATUS = {
  SUCCESS: 'Berhasil',
  PENDING: 'Pending',
  FAIL: 'Gagal',
};

const Dot = () => {
  return <View style={styles.dot} />;
};

export const ItemList = props => {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    completed_at,
    status,
  } = props.item;
  const sender = toUpperCase(sender_bank);
  const receiver = toUpperCase(beneficiary_bank);
  const name = toUpperCase(beneficiary_name);
  const amount_transfer = `Rp${formatNumber(amount)}`;
  const completed_at_date = completed_at.substr(0, 10);
  const date_send = formatDate(completed_at_date);
  const color = PRIMARY_COLOR[status];
  const text_status = TEXT_STATUS[status];
  return (
    <View style={[styles.container, {borderLeftColor: color}]}>
      <View style={styles.content}>
        <View style={styles.log_bank}>
          <Text style={styles.text_bold}>{sender}</Text>
          <Image
            style={styles.icon_arrow}
            source={ASSET_ICONS.ICON_RIGHT_ARROW}
          />
          <Text style={styles.text_bold}>{receiver}</Text>
        </View>
        <View>
          <Text>{name}</Text>
        </View>
        <View style={styles.description}>
          <Text>{amount_transfer}</Text>
          <Dot />
          <Text>{date_send}</Text>
        </View>
      </View>
      <View style={styles.status}>
        <View style={[styles.status_container, {backgroundColor: color}]}>
          <Text style={styles.text_status}>{text_status}</Text>
        </View>
      </View>
    </View>
  );
};
