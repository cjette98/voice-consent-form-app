import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'

import { formKeys, updateForm } from '../../redux/form'
import routeList from '../../routes/list'

export default function ({ navigation, route }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [language, setLanguage] = useState(null)
  const doneForm = route.params?.doneForm || false

  const onNext = async () => {
    // validate
    if (!name || !language) {
      Alert.alert('Form field is required', 'Please enter your name and select language')
      return
    }
    // set data to redux
    await dispatch(updateForm({ key: formKeys.name, value: name }))
    await dispatch(updateForm({ key: formKeys.language, value: language }))
    // move to next screen
    navigation.navigate(routeList.CONSENT_FORM)
  }

  const onAddAgain = () => {
    navigation.navigate(routeList.HOME_TAB)
  }

  const onViewConsents = () => {
    navigation.navigate(routeList.HOME_TAB) // reset home route params
    navigation.navigate(routeList.CONSENTS_TAB) // navigate to all consents screen
  }

  return {
    doneForm,
    language,
    name,
    onAddAgain,
    onNext,
    onViewConsents,
    setLanguage,
    setName,
  }
}
