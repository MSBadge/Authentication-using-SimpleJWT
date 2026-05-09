import React, { useState } from 'react'
import { postStu } from '../api/StuAPI';

export const Post = ({onStuAdd}) => {

    const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'M'
    });

    const handleChenge = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    }


    // Submit on database
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await postStu(formData)

            setFormData({
                name: '',
                age: '',
                gender: 'M'
            });

            if (onStuAdd) {
                onStuAdd ()
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <>
    <div className='flex justify-center'>
    <div className=' font-bold my-5 p-2 border rounded-2xl w-200'>
        <div className='flex justify-center font-normal text-2xl m-2 pb-1'>
            <p>Add Post</p>
        </div>
        <form action="" method="post" onSubmit={handleSubmit} className='grid grid-cols-4 gap-x-6 m-2'>
            <input type="text" onChange={handleChenge} value={formData.name} name='name' placeholder='Name'/>
            <input type="number" name="age" onChange={handleChenge} value={formData.age} placeholder='Age'/>
            
            <select name="gender" id="" onChange={handleChenge} value={formData.gender}>
                <option className=' bg-black' value="M">Male</option>
                <option className='bg-black' value="F">Female</option>
                <option className='bg-black' value="O">Other</option>
            </select>
            <button type="submit" className='mx-2 p-1.5 border rounded-2xl bg-green-700'>Save</button>
        </form>
    </div>
    </div>
    </>
  )
}
