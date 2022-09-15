import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Microphone from '../../assets/microphone.png'
import Play from '../../assets/play.png'
import Pause from '../../assets/pause.png'

import Button from '../../components/Button'
import ScreenWrapper from '../../components/ScreenWrapper'
import themeColor from '../../theme/colors'
import themeStyle from '../../theme/styles'

import useController from './index.controller'

function ConsentForm(props) {
  const { consentText, language, playing, recorded, onAnswerConsent, onRetry, onSave, togglePlay } =
    useController(props)

  return (
    <>
      <ScreenWrapper>
        <View style={[themeStyle.alignItemsCenter, themeStyle.spacingBottom]}>
          <Text style={themeStyle.heading}>Consent Form</Text>
        </View>

        <View style={themeStyle.spacingBottom}>
          <Text style={themeStyle.body}>
            {consentText}
          </Text>
        </View>

        <View style={themeStyle.spacingBottom}>
          <Text style={themeStyle.body}>
            Do you agree to this agreement? Please respond by saying{' '}
            {language.value === 'en-US' ? '“Yes”' : '"Oui"'} or{' '}
            {language.value === 'en-US' ? '“No”' : '"Non"'}.
          </Text>
        </View>

        <View style={recorded ? themeStyle.flexRowCenterSpaceBetween : themeStyle.alignItemsCenter}>
          {recorded ? (
            <Button onPress={() => togglePlay(!playing)} type="circle">
              {playing ? (
                <Image source={Pause} style={themeStyle.icon} resizeMode="contain" />
              ) : (
                <Image source={Play} style={themeStyle.icon} resizeMode="contain" />
              )}
            </Button>
          ) : (
            <Button onPress={onAnswerConsent} type="circle">
              <Image source={Microphone} style={themeStyle.icon} resizeMode="contain" />
            </Button>
          )}

          {recorded && <Text style={themeStyle.body}>You responded</Text>}
        </View>
      </ScreenWrapper>

      {recorded && (
        <View style={styles.footer}>
          <Button onPress={onRetry} style={[themeStyle.flex1, themeStyle.alignItemsCenter]} noColor>
            <Text style={themeStyle.body}>Retry</Text>
          </Button>

          <View style={styles.footerDivider} />

          <Button onPress={onSave} style={[themeStyle.flex1, themeStyle.alignItemsCenter]} noColor>
            <Text style={themeStyle.body}>Save</Text>
          </Button>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    ...themeStyle.flexRowCenter,
    borderTopWidth: 1,
    borderColor: themeColor.gray,
  },
  footerDivider: {
    height: '100%',
    borderLeftWidth: 1,
    borderColor: themeColor.gray,
  },
})

export default ConsentForm
