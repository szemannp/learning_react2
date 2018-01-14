import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import './css/style.css'

import App from './components/App'
import StorePicker from './components/StorePicker'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('main'))
