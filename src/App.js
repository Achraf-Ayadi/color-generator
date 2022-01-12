import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#F0F8FF').all(10))

  const handlesubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handlesubmit}>
          <input
            type='text'
            name='amount'
            value={color}
            placeholder='#F0F8FF'
            onChange={(e) => {
              setColor(e.target.value)
            }}
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexcolor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
