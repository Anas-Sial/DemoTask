import { SafeAreaView } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigations/StackNavigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </SafeAreaView>
  )
}

export default App
