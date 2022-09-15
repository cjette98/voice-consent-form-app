import React from 'react'
import { Text, View } from 'react-native'

import ScreenWrapper from '../../components/ScreenWrapper'
import themeStyle from '../../theme/styles'

import useController from './index.controller'
import Form from './Form'
import Success from './Success'

function Home(props) {
  const { doneForm, language, name, onAddAgain, onNext, onViewConsents, setLanguage, setName } =
    useController(props)

  return (
    <ScreenWrapper>
      <View style={[themeStyle.alignItemsCenter, themeStyle.spacingBottom]}>
        <Text style={themeStyle.heading}>Consent Form</Text>
      </View>

      {doneForm ? (
        <Success onAddAgain={onAddAgain} onViewConsents={onViewConsents} />
      ) : (
        <Form
          language={language}
          name={name}
          onNext={onNext}
          setLanguage={setLanguage}
          setName={setName}
        />
      )}
    </ScreenWrapper>
  )
}

export default Home
