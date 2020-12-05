import React, {useState} from 'react';
import {View, Modal, Image, Text, TouchableHighlight, TouchableOpacity, Alert} from 'react-native';

import {styles} from '../styles/transaction_search_input.styles';
import {ASSET_ICONS} from '../../../utils/icons';

import {useStateValue} from '../../../utils/context';

const options = [
	{
		key: 'aToZ',
		text: 'Nama A - Z',
	},
	{
		key: 'zToA',
		text: 'Nama Z - A',
  },
  {
		key: 'recent',
		text: 'Tanggal Terbaru',
	},
	{
		key: 'oldest',
		text: 'Tanggal Terlama',
	},
];


export const SortButton = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [value, setValue] = useState(null);
  const [{sortBy}, dispatch] = useStateValue();
  const onSortChanged = (key) => {
    dispatch({
      type: 'sortingBy',
      sortingBy: {sortBy: key},
    });
    setModalVisible(!modalVisible);
  };

  return (
    <>
    <TouchableOpacity 
      style={styles.sortContainer} 
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.sort_text}>URUTKAN</Text>
      <Image style={styles.sort_icon} source={ASSET_ICONS.ICON_DOWN_ARROW} />
    </TouchableOpacity>
    {/* <View style={styles.centeredView}> */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>URUT BERDASARKAN</Text>
            	<View>
			        {options.map(item => {
				        return (
                  <TouchableOpacity 
                    key={item.key} 
                    style={styles.buttonContainer}
                    onPress={() => {
                      onSortChanged(item.key);
                      // setValue(item.key);
                    }}
                    >
					        	<View
					        		style={styles.circle}
					        	>
					        		{sortBy.sortBy === item.key && <View style={styles.checkedCircle} />}
					        	</View>
                    <Text style={styles.text}>{item.text}</Text>
                  </TouchableOpacity>
				        );
			        })}
		        </View>
          </View>
        </View>
      </Modal>
    {/* </View> */}
    </>
  )
}