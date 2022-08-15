import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@redux/store'
import { Layout } from '@components/Layout'

export const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
