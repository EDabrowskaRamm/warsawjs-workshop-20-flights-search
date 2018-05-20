import React from 'react'
import '../styles/searchView.css'

export default class SearchView extends React.Component {
  state = {
    from: 'Waw',
    to: 'JFK',
    departDate: '2018-05-20',
    returnDate: '2018-05-30'
  }

  handleInputChange = name => e => {
    console.log(e.target.value)
    this.setState({
      [name]: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    console.log('submit')
    this.props.onSearch(this.state)
  }

  render () {
    const {from, to, departDate, returnDate} = this.state

    return <form onSubmit={this.handleFormSubmit}>
      <div className='form-group'>
        <label htmlFor='flyFrom'>From:
          <select id='from'
            value={from}
            onChange={this.handleInputChange('from')}>
            <option>Waw</option>
            <option>JFK</option>
          </select>
        </label>
        <label htmlFor='dateFrom'>Date:
          <input type="date" value={departDate} onChange={this.handleInputChange('departDate')} />
        </label>
      </div>

      <div className='form-group'>
        <label htmlFor='flyTo'>To:
          <select id='to'
            value={to}
            onChange={this.handleInputChange('to')}>
            <option>Waw</option>
            <option>JFK</option>
          </select>
        </label>
        <label htmlFor='dateTo'>Date:
          <input type='date' value={returnDate} onChange={this.handleInputChange('returnDate')} />
        </label>
      </div>
      <button type='submit' id='search'>Search</button>
      <button type='submit' id='reset'>Reset</button>
    </form>
  }
}