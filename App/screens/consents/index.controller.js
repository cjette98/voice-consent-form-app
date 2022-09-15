import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import service from '../../service'

export default function () {
  const { data } = useSelector((state) => state.consents.consents)
  const [playing, setPlaying] = useState(null)

  useEffect(() => {
    const listener = service.ttsOnFinished(onDonePlaying)
    return () => {
      listener.remove()
    }
  }, [])

  const keyExtractor = (item, index) => index.toString()

  const togglePlay = (item) => {
    const shouldPlay = item !== null
    if (shouldPlay) {
      if (playing !== null) {
        service.ttsStop()
      }
      service.ttsSpeak(item.audioTextValue, item.language.value)
    } else {
      service.ttsStop()
    }
    setPlaying(item)
  }

  const onDonePlaying = () => {
    setPlaying(null)
  }

  return {
    data,
    playing,
    togglePlay,
    keyExtractor,
  }
}
