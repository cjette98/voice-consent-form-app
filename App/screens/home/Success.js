import React from 'react'
import { Image, Text, View } from 'react-native'

import Checklist from '../../assets/checklist.png'
import ArrowRight from '../../assets/arrow-right.png'

import Button from '../../components/Button'
import themeColor from '../../theme/colors'
import themeStyle from '../../theme/styles'

function Success({ onAddAgain, onViewConsents }) {
  return (
    <>
      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Button type="circle">
          <Image source={Checklist} style={themeStyle.iconBig} resizeMode="contain" />
        </Button>
      </View>

      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Text style={[themeStyle.body, themeStyle.textCenter]}>
          Thank you, your consent has been successfully saved!
        </Text>
      </View>

      <View style={[themeStyle.spacingBottom, themeStyle.alignItemsCenter]}>
        <Button onPress={onViewConsents} rightIcon={ArrowRight}>
          <Text style={{ color: themeColor.black }}>View all consents</Text>
        </Button>
      </View>

      <View style={themeStyle.alignItemsCenter}>
        <Button onPress={onAddAgain} rightIcon={ArrowRight}>
          <Text style={{ color: themeColor.black }}>Add again</Text>
        </Button>
      </View>
    </>
  )
}

export default Success
