import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index, rgb, weight, hexcolor }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexvalue = `#${hexcolor}`
  console.log(bcg)
  useEffect(() => {
    let timeout = setInterval(() => {
      setAlert(false)
    }, 2000)
    return () => {
      clearInterval(timeout)
    }
  }, [alert])

  return (
    <article
      className={` color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: ` rgb( ${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexvalue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexvalue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
