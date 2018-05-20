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
    }
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
        return <SearchView onSearch={this.onSearch} />
      case 'flights':
        return <FlightsView searchData = {searchData} />
      default:
        return <p>asd</p>
    }
  }
}

export default App