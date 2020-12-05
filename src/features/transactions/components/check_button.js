import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import {styles} from '../styles/check_button.style';

export const LABEL_POSITION = {
  RIGHT: 'right',
  LEFT: 'left'
};

export const CheckButton = props => {
  
  const outerSize = (parseInt(props.outerSize) < 10 || isNaN(parseInt(props.outerSize))) ? 10 : parseInt(props.outerSize);
  const filterSize = (parseInt(props.filterSize) > outerSize + 3 || isNaN(parseInt(props.filterSize))) ? outerSize - 3 : parseInt(props.filterSize);
  const innerSize = (parseInt(props.innerSize) > filterSize + 5 || isNaN(parseInt(props.innerSize))) ? filterSize - 5 : parseInt(props.innerSize);
  const customStyle = StyleSheet.create({
    circleOuterStyle: {
      width: outerSize,
      height: outerSize,
      borderRadius: outerSize / 2,
      backgroundColor: props.outerColor
    },
    circleFilterStyle: {
      width: filterSize,
      height: filterSize,
      borderRadius: filterSize / 2,
      backgroundColor: props.filterColor
    },
    circleInnerStyle: {
      width: innerSize,
      height: innerSize,
      borderRadius: innerSize / 2,
      backgroundColor: props.innerColor
    }
  });
  
  const [customStyleState, setCustomStyle] = useState(customStyle)

  const onToggle = () => {
    if (props.onToggle) {
      props.onToggle(!props.checked);
    }
  }

  const renderInner = () => {
    return props.checked ? (<View style={state.customStyle._circleInnerStyle} />) : (<View />);
  }

  const  renderLabel = (position) => {
    return ((props.label.length > 0) && (position === props.labelPosition))
      ? <Text style={[styles.checkBoxLabel, props.styleLabel]}>{props.label}</Text>
      : <View />
  }
  
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[styles.checkBoxContainer, props.styleCheckboxContainer]}>
        {renderLabel(LABEL_POSITION.LEFT)}
        <View style={[styles.alignStyle, customStyleState.circleOuterStyle]}>
          <View style={[styles.alignStyle, customStyleState.circleFilterStyle]}>
            {renderInner}
          </View>
        </View>
        {renderLabel(LABEL_POSITION.RIGHT)}
      </View>
    </TouchableOpacity>
  );

}
