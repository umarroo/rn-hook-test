import React from 'react';
import { Alert, View, Text, Image} from 'react-native';

import {toUpperCase, formatDate, formatNumber} from '../../../utils/helpers';
import {styles} from '../styles/transaction_detail_screen.styles';
import {COLORS} from '../../../utils/colors';
import {ASSET_ICONS} from '../../../utils/icons';

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
      <Text style={[styles.text_bold, {paddingRight: 5}]}>ID TRANSAKSI: #{id}</Text>
      <Image style={styles.copy_icon} source={ASSET_ICONS.ICON_COPY} />
    </View>
    <View style={styles.container}>
      <Text style={styles.text_bold}>DETAIL TRANSAKSI</Text>
      <Text >Tutup</Text>
    </View>
    <View style={{backgroundColor: COLORS.WHITE}}>
    <View style={styles.log_bank}>
        <Text style={styles.text_bold}>{toUpperCase(sender_bank)}</Text>
        <Image
          style={styles.icon_arrow}
          source={ASSET_ICONS.ICON_RIGHT_ARROW}
        />
        <Text style={styles.text_bold}>{toUpperCase(beneficiary_bank)}</Text>
    </View>
    <View style={styles.detailContainer}>
      <View>
        <Text style={styles.text_bold}>{toUpperCase(beneficiary_name)}</Text>
        <Text>{account_number}</Text>
      </View>
      <View style={styles.log_bank_detail}>
        <Text style={styles.text_bold}>NOMINAL</Text>
        <Text>{`Rp${formatNumber(amount)}`}</Text>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <View>
        <Text style={styles.text_bold}>BERITA TRANSFER</Text>
        <Text>Coba mbanking yey</Text>
      </View>
      <View style={styles.log_bank_detail}>
        <Text style={styles.text_bold}>KODE UNIK</Text>
        <Text>{unique_code}</Text>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <View style={styles.log_bank_detail}>
        <Text style={styles.text_bold}>WAKTU DIBUAT</Text>
        <Text>{formatDate(created_at.substr(0, 10))}</Text>
      </View>
    </View>
    </View>
    </>
  )
}