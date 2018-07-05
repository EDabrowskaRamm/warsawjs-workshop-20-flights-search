import React from 'react'
import SearchView from './SearchView'
import FlightsView from './FlightsView'

class App extends React.Component {
  state = {
    view: 'search',
    searchData: {
      to: null,
      from: null,
      departDate: null,
      returnDate: null
    },
    airports: []
  }

  async componentDidMount () {
    const url = `https://warsawjs-flights-api.herokuapp.com/airports/`
    const result = await fetch(url)
    const airports = await result.json()
    
    this.setState({airports})
    console.log(airports)
  }

  onSearch = (searchData) => {
    this.setState({
      view: 'flights',
      searchData
    })
  }

  render () {
    const {view, searchData} = this.state
    switch (view) {
      case 'search':
        return <SearchView onSearch={this.onSearch} airports={this.state.airports} />
      case 'flights':
        return <FlightsView searchData = {searchData} />
      default:
        return <p>asd</p>
    }
  }
}

export default App