import React from 'react'

const Flight = ({flight}) => {
  return (<div>
    <h4>From: </h4>
    <span>{flight.inboundAirport} </span>
    <span>{flight.inboundDate}</span>
    
    <h4>To:</h4>
    <span>{flight.outboundAirport} </span>
    <span>{flight.outboundDate}</span>

    <p>For: {flight.price}</p>
  </div>)
}

export default Flight