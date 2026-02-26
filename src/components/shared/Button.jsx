import React, { version } from 'react'

const Button = ({children, version = "primary", isDisabled=true, type = "submit",}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}


export default Button