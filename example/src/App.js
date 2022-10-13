import React, {useState} from 'react'
import { ReactSelectGroup } from 'react-select-group'
import 'react-select-group/dist/index.css'

const flags = [
  'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326782/flags/gmail.png',
  'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326789/flags/outlook.png',
  'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326776/flags/apple.png',
  'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326799/flags/yahoo.png'
]
const labels = [
  'Gmail', 'Outlook', 'Apple Mail', 'Yahoo Mail'
]

const App = () => {
  const [email, setEmail] = useState({
    flag: '',
    label: '',
    text: ''
  })
  const [error, setError] = useState(false)
  const [errorCause, setErrorCause] = useState('')

  const onChangeValue = (data) => {
    let errorEmail = false
    if(data.text) {
      errorEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.text)
    }
    
    if(errorEmail) {
      setError(true)
      setErrorCause('Format email wrong!')
    } else {
      setError(false)
      setErrorCause('')
      setEmail(data)
    }
  } 

  let result;
  if(!error && email.text) {
    result = (
      <div className='flex flex-row bg-gray-sg-100 p-2 mt-2 rounded-md'>
        <img src={email.flag} alt={email.label} />
        <p className='text-14px pl-2'>{email.text}</p>
      </div>
    )
  }
  
  return (
    <div className='mt-36 px-52'>
      <ReactSelectGroup 
        placeholder='Type email here'
        isError={error}
        flags={flags} 
        labels={labels} 
        onChange={onChangeValue}
      />
      <div className='text-red-sg-100 mt-2 text-sm'>
        {errorCause}
      </div>
      {result}
    </div>
  )
}

export default App
