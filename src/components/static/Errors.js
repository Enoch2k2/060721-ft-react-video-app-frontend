import React from 'react'

const Errors = ({ errors }) => {
  const errorMessages = errors.map((error, index) => <li> { error }</li>)

  return (
    <ul>
      { errorMessages }
    </ul>
  )
}

export default Errors
