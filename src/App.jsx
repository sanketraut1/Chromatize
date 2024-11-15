import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  const buttonArray = [
    { name: "Red", color: 'red' },
    { name: "Green", color: 'green' },
    { name: "Pink", color: 'pink' },
    { name: "Orange", color: 'orange' },
    { name: "Grey", color: 'grey' },
    { name: "Blue", color: 'blue' },
    { name: "Brown", color: 'brown' },
    { name: "Yellow", color: 'yellow' },
    { name: "Purple", color: 'purple' },
  ]
  return (
    <div className='w-full h-screen duration-200'
      style={{
        backgroundColor: color
      }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        {/* <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'red'
            }}
            onClick={() => { setColor('red') }}
          >Red
          </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'green'
            }}
            onClick={() => { setColor('green') }}
          >Green
          </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'blue'
            }}
            onClick={() => { setColor('blue') }}
          >Blue
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'pink'
            }}
            onClick={() => { setColor('pink') }}
          >Pink
          </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'grey'
            }}
            onClick={() => { setColor('grey') }}
          >Grey
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'purple'
            }}
            onClick={() => { setColor('purple') }}
          >Purple
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'orange'
            }}
            onClick={() => { setColor('orange') }}
          >Orange
          </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'yellow'
            }}
            onClick={() => { setColor('yellow') }}
          >Yellow
          </button>


          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              backgroundColor: 'brown'
            }}
            onClick={() => { setColor('brown') }}
          >Brown
          </button>

        </div> */}

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {buttonArray.map((button, index) => (
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{
                backgroundColor: `${button.color}`
              }}
              key={`button-color-change-${index}`}
              onClick={() => {
                setColor(`${button.color}`)
              }}
            > {button.name}
            </button>
          ))}

        </div>
      </div>
    </div >
  )
}

export default App
