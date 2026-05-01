import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, saveTokens } from '../api/UserAPI'

export const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChenge = (e) => {
    setFormData(
      {...formData, [e.target.name]: e.target.value}
    )
  }

  // submit form to login
  const loginForm = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    try {
      const res = await loginUser(formData)
      saveTokens(res.data)
      
      navigate('/')
    } catch (error) {
      setErrorMessage('Invalid username or password')
      console.log(error)
    }
  }

  return (
    <>
    <div className='flex justify-center items-center h-100 m-1.5 text-2xl'>
      <div className='w-110 border rounded-2xl p-3.5 h-auto'>
        <p className='flex justify-center mb-4'>Login Form</p>
        <hr />
        <form action="" method="post" onSubmit={loginForm}>
          Username: <input type="text" name='username' placeholder='Username' onChange={handleChenge} className='border rounded-md my-4 hover:bg-gray-700'/>
          Password: <input type="password" name="password" id="" placeholder='********' onChange={handleChenge} className='border rounded-md my-2 hover:bg-gray-700'/>
          {errorMessage && <p className='text-red-500 text-base'>{errorMessage}</p>}
          <div className='mt-10'>
           <button type="submit" className='my-2 border rounded-md p-1 w-full active:bg-green-700'>Login</button>
          </div>
        </form>
        <hr />
        <div className='flex justify-center'>
          <Link to='/register/'>Register</Link>
        </div>
      </div>
    </div>
    </>
  )
}
