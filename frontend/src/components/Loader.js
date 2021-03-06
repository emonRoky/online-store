import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div
      class="spinner-border text-warning"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Loader
