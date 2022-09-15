import React from 'react'
import { StyleSheet, Text, TextInput as RNTextInput, View } from 'react-native'

import themeColor from '../theme/colors'
import themeStyle, { globalSpacing } from '../theme/styles'

function TextInput({ label, ...inputProps }) {
  return (
    <View>
      <View style={[themeStyle.spacingLeft, themeStyle.spacingBottomMedium]}>
        <Text style={themeStyle.label}>{label}</Text>
      </View>

      <RNTextInput
        {...inputProps}
        style={styles.input}
        placeholderTextColor={themeColor.darkGray}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    ...themeStyle.body,
    borderWidth: 1,
    borderColor: themeColor.gray,
    paddingHorizontal: globalSpacing,
  },
})

export default TextInput
