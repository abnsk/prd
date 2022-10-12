import React from "react"
import ReactDom from "react-dom"
import { store } from './app/store'
import { Provider } from 'react-redux'

import App from "./App"
import "./App.css"

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)