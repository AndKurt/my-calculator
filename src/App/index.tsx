import React from 'react'
import { store } from '@redux/store'
import { Provider } from 'react-redux'

import { Layout } from '@components/Layout'

export const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
