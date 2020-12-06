import React, {useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, View, Text, TouchableHighlight} from 'react-native';

import client from '../../../utils/service';
import {GET_TRANSACTION_LIST} from '../../../utils/transApi';
import {convertObjectToArray, toUpperCase, sortName, sortTime} from '../../../utils/helpers';
import {styles} from '../styles/transaction_screen.styles';
import {SearchInput} from '../components/transaction_search_input';
import {ItemList} from '../components/transaction_list';
import {COLORS} from '../../../utils/colors';

import {useStateValue} from '../../../utils/context';

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [{sortBy}] = useStateValue();

  const filteringData = () => {
    if (!search) {
      return data;
    }

    return data.filter(item => {
      const toSearch = toUpperCase(search);
      const searchIn = [toUpperCase(item.beneficiary_name), toUpperCase(item.sender_bank), toUpperCase(item.beneficiary_bank), `"${item.amount}"`]
      const find_name = searchIn[0].match(toSearch); // TODO: crash. regex special character conflict e.g '?'
      const find_sender_bank = searchIn[1].match(toSearch);
      const find_beneficiary_bank = searchIn[2].match(toSearch);
      const find_amount = searchIn[3].match(toSearch);
      if (find_name !== null || find_sender_bank !== null || find_beneficiary_bank !== null || find_amount !== null) {
        return true;
      }
    });
  };

  const getTransaction = async () => {
    try {
      setLoading(true)
      const response = await client.get(GET_TRANSACTION_LIST);
      if (response?.status === 200) {
        const data_transaction = response?.data;
        const array_list = convertObjectToArray(data_transaction);
        setData(array_list);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return Alert.alert('Failed');
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  useEffect(() => { // https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928
    sortList(sortBy.sortBy);
  }, [sortBy])

  const sortList = (sort_by) => {
    // console.log("click", sort_by);
    if (sort_by == 'aToZ'){
      setData([...sortName(data)]); // https://stackoverflow.com/a/56266640, 
    }else if(sort_by == 'zToA'){
      setData([...sortName(data, 'descend')]);
    }else if(sort_by == 'recent'){
      setData([...sortTime(data)]);
    }else if(sort_by == 'oldest'){
      setData([...sortTime(data, 'latest')]);
    }
  }

  const List = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={COLORS.ORANGE_FLIP} />
    }
    if (!Array.isArray(data)) {
      return <Text>Fetch data fail</Text>;
    }
    const data_list = filteringData();
    if (data_list.length === 0) {
      return <Text>Not found</Text>;
    }
    return data_list.map((item, i) => {
      return (
        <TouchableHighlight 
          underlayColor={ 'transparent' }
          key={i}
          onPress={() => 
            navigation.navigate('Details', {
              id: item.id,
              beneficiary_bank: item.beneficiary_bank,
              beneficiary_name: item.beneficiary_name,
              sender_bank: item.sender_bank,
              amount: item.amount,
              created_at: item.created_at,
              unique_code: item.unique_code,
              account_number: item.account_number
            })
          }
        >
          <ItemList key={i} item={item} />
        </TouchableHighlight>
      );
    });
  };

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={setSearch} />
      <ScrollView style={styles.list}>
        <List />
      </ScrollView>
    </View>
  );
};
