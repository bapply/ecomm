import React from 'react'
import $ from 'jquery'

export default class Create extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      price: 0,
      available: false,
      discount: 0
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const title = $('[name=title]').val()
    const price = $('[name=price]').val()
    const available = $('[name=available]').val()
    const discount = $('[name=discount]').val()

    $.ajax({
      url: '/product/create',
      method: 'post',
      data: {
        title,
        price,
        available,
        discount
      }
    })
    .done(res => {
      this.setState(res)
    })
    .fail(err => {
      alert(err)
    })
  }

  handleChange (e) {
    const input = e.target
    const name = input.name
    const value = input.value
    this.setState({ [name]: value })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input placeholder="Product title goes here" name="title" id="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input placeholder="Product price goes here" name="price" id="price" value={this.state.price} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="available">Available:</label>
          <input placeholder="Product available goes here" name="available" id="available" type="check" checked={this.state.available} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input placeholder="Product discount goes here" name="discount" id="discount" type="number" value={this.state.discount} onChange={this.handleChange.bind(this)} />
        </div>
        <button>Submit</button>
      </form>
    )
  }
}