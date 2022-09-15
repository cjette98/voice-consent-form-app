import Tts from 'react-native-tts'

function ttsOnFinished(callback) {
  return Tts.addEventListener('tts-finish', callback)
}

function ttsSpeak(text, language) {
  Tts.setDefaultLanguage(language)
  Tts.speak(text)
}

function ttsStop() {
  Tts.stop()
}

export default {
  ttsOnFinished,
  ttsSpeak,
  ttsStop,
}
