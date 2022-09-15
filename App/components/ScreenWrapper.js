import React from 'react'
import { SafeAreaView, View } from 'react-native'

import themeStyle from '../theme/styles'

function ScreenWrapper({ hPadding, children }) {
  return (
    <SafeAreaView style={themeStyle.flex1}>
      <View
        style={[
          themeStyle.flex1,
          themeStyle.contentTopSpacing,
          hPadding && themeStyle.pageHorizontalSpacing,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  )
}

ScreenWrapper.defaultProps = {
  hPadding: true,
}

export default ScreenWrapper
