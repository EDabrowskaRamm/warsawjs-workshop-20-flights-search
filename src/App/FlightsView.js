import React from 'react'
import Flight from './Flight'

export default class returnDate extends React.Component {
  state = {
    flights: []
  }

  async componentDidMount () {
    const {from, to, departDate, returnDate} = this.props.searchData
    const url = `https://warsawjs-flights-api.herokuapp.com/flights/${departDate}/${returnDate}/${from}/${to}`
    const result = await fetch(url)
    const flights = await result.json()
    
    this.setState({flights})
    console.log(flights)
  }

  render () {
    console.log(this.props)
    return (<div>
      <ul>
        {this.state.flights.map(flight => <Flight key={flight.id} flight={flight} /> )}
      </ul>
    </div>)
  }
}

