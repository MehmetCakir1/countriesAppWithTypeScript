import React from 'react'
import MapWrapper from './components/MapWrapper'
import {Provider} from "react-redux"
import { store } from './app/store'

const App = () => {
  return (
    <Provider store={store}>
      <MapWrapper/>
    </Provider>
  )
}

export default App