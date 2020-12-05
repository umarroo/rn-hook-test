import React, {useState} from 'react';
import {View, Modal, Image, Text, TouchableHighlight, TouchableOpacity} from 'react-native';

import {styles} from '../styles/transaction_search_input.styles';
import {ASSET_ICONS} from '../../../utils/icons';

export const SortButton = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    {/* </View> */}
    </>
  )
}