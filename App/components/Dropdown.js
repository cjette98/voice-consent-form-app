import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Dropdown as RBDropdown } from 'react-native-element-dropdown'

import themeColor from '../theme/colors'
import themeStyle, { globalSpacing } from '../theme/styles'

function Dropdown({ label, data, value, onChange, ...rest }) {
  return (
    <View>
      <View style={[themeStyle.spacingLeft, themeStyle.spacingBottomMedium]}>
        <Text style={themeStyle.label}>{label}</Text>
      </View>

      <RBDropdown
        data={data}
        value={value}
        onChange={onChange}
        style={styles.dropdown}
        placeholderStyle={{ fontSize: themeStyle.body.fontSize, color: themeColor.darkGray }}
        selectedTextStyle={themeStyle.body}
        itemTextStyle={themeStyle.body}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: themeColor.gray,
    paddingVertical: globalSpacing / 3,
    paddingHorizontal: globalSpacing,
    color: 'red',
  },
})

export default Dropdown
