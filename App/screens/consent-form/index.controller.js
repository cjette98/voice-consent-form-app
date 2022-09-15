import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Voice from '@react-native-community/voice'

import { addConsent } from '../../redux/consents'
import routeList from '../../routes/list'
import service from '../../service'

export default function ({ navigation }) {
  const dispatch = useDispatch()
  const { name, language } = useSelector((state) => state.form.form)
  const [recorded, setRecorded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [textResult, setTextResult] = useState('')
  const [consentText, setConsentText] = useState(`You understand that by using the site or site services, you agree to be bound by this agreement. If you do not accept this agreement in its entirety, you must not access or use the site or the site services.`)


  useEffect(() => {
    service.ttsSpeak(consentText, language.value)
  }, [])


  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults
    const listener = service.ttsOnFinished(onDoneSpeaking)

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
      listener.remove()
      onRetry()
    }
  }, [])

  const onAnswerConsent = async () => {
    Voice.start(language.value)
  }

  const onSpeechResults = (data) => {
    setTextResult(data.value[0])
    setRecorded(true)
  }

  const onDoneSpeaking = () => {
    setPlaying(false)
  }

  const togglePlay = (shouldPlay) => {
    if (shouldPlay) {
      service.ttsSpeak(textResult, language.value)
    } else {
      service.ttsStop()
    }
    setPlaying(shouldPlay)
  }

  const onRetry = () => {
    service.ttsStop()
    setRecorded(false)
    setPlaying(false)
    setTextResult('')
  }

  const validate = () => {
    if (language.value === 'en-US') {
      if (textResult !== 'yes' && textResult !== 'no') {
        Alert.alert('Invalid english consent', "Please say 'Yes' or 'No' only")
        return false
      }
    } else {
      if (textResult !== 'oui' && textResult !== 'non') {
        Alert.alert('Invalid french consent', "Please say 'Oui' or 'Non' only")
        return false
      }
    }
    return true
  }

  const onSave = async () => {
    const toSave = {
      name,
      language,
      audioTextValue: textResult,
    }
    const isOk = validate()
    if (isOk) {
      await dispatch(addConsent(toSave)) // add consent to persisted redux
      navigation.navigate(routeList.HOME_TAB, { doneForm: true }) // navigate to next screen
    }
  }

  return {
    consentText,
    language,
    playing,
    recorded,
    onAnswerConsent,
    onRetry,
    onSave,
    togglePlay,
  }
}
