import React from 'react'
import ReactDOM from 'react-dom'
import ProductAdmin from './components/product-admin.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Products</h1>
        <ProductAdmin.Create></ProductAdmin.Create>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))