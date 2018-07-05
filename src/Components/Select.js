import React from 'react'

const Select = ({value, onChange}) => {
  return (
    <select onChange={onChange}>
      {value.map(airport => <option key={airport.id} >{airport.code}</option>)}
    </select>
  )
}

export default Select