import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/UserAPI'

export const Register = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChenge = (e) => {
    setFormData(
      {...formData, [e.target.name]: e.target.value}
    )
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      await register(formData)
      setFormData({
        username: '',
        password: ''
      })
      navigate('/login/') 
    } catch (error) {
      console.log(error.data);
      
    }
  }

  return (
    <>
    <div className='flex justify-center items-center h-100 m-1.5 text-2xl'>
      <div className='w-110 border rounded-2xl p-3.5 h-auto'>
        <p className='flex justify-center mb-4'>Registration Form</p>
        <hr />
        <form action="" method="post" onSubmit={submitForm}>
          Username: <input type="text" name='username' placeholder='Username' onChange={handleChenge} className='border rounded-md my-4 hover:bg-gray-700'/>
          Password: <input type="password" name="password" id="" placeholder='********' onChange={handleChenge} className='border rounded-md my-2 hover:bg-gray-700'/>
          <div className='mt-10'>
           <button type="submit" className='my-2 border rounded-md p-1 w-full active:bg-green-700'>Register</button>
          </div>
        </form>
        <hr />
        <div className='flex justify-center'>
          <Link to='/login/'>Login</Link>
        </div>
      </div>
    </div>
      
    </>
  )
}
