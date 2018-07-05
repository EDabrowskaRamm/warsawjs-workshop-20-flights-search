import React from 'react'
import Select from '../Components/Select'

export default class SearchView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: props.airports[0] ? props.airports[0].code : '',
      to: props.airports[0] ? props.airports[0].code : '',
      departDate: '2018-05-20',
      returnDate: '2018-05-30'
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      from: nextProps.airports[0] ? nextProps.airports[0].code : '',
      to: nextProps.airports[0] ? nextProps.airports[0].code : '',
    })
  }

  handleInputChange = name => e => {
    console.log('ddd', e.target.value)
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
    const {departDate, returnDate} = this.state

    return <form onSubmit={this.handleFormSubmit}>
      <div className='form-group'>
        <label htmlFor='flyFrom'>From:
          <Select value={this.props.airports}
            onChange={this.handleInputChange('from')} />
        </label>
        <label htmlFor='dateFrom'>Date:
          <input type="date" value={departDate} onChange={this.handleInputChange('departDate')} />
        </label>
      </div>

      <div className='form-group'>
        <label htmlFor='flyTo'>To:
          <Select value={this.props.airports}
            onChange={this.handleInputChange('to')} />
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