import 'react-native-gesture-handler'
import React from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes/index'
import store from './redux/store'

let persistor = persistStore(store)

LogBox.ignoreLogs(['new NativeEventEmitter'])

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
