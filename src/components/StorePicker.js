import React from 'react'

import { getFunName } from '../helpers'

import PropTypes from 'prop-types'

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault()

    let storeId = this.storeInput.value

    console.log("KUKI>>>>>>", this.props)
    this.props.history.push(`store/${storeId}`)
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
}

export default StorePicker
