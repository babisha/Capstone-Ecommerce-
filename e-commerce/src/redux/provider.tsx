"use client";
import { Provider as ProviderByRedux } from 'react-redux';
import React from 'react'
import store from './store'

const Provider: React.FC<{children:any}>=(props) => {
  return (
    <ProviderByRedux store={store}>
        {props.children}

    </ProviderByRedux>
  )
}

export default Provider