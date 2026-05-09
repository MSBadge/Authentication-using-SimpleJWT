import { useEffect, useState } from 'react'
import { updateStu } from '../api/StuAPI';

export const Update = ({selectedStudent, onUpdate, onCancle}) => {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'M'
  });

  const handleChenge = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(()=>{
    if (selectedStudent) {
      setFormData({
        name : selectedStudent.name || "",
        age: selectedStudent.age || '',
        gender : selectedStudent.gender || ''
      })

    }
  },[selectedStudent])

  const handleUpdate = async (e) => {
    e.preventDefault()
    if (!selectedStudent) {
      return;
    }
    try {
      await updateStu(selectedStudent.id, formData)
      onUpdate()
      onCancle()
    } catch (error) {
      console.log(error);
      alert('Faild to Update data.')
      
    }
  }
   if (!selectedStudent) {
    return null;
  }

  return (
    <>
    <div className='flex justify-center'>
    <div className='font-bold my-5 p-2  border rounded-2xl border-x-white'>
      <div className='flex justify-center font-normal text-2xl'>
        <p>Update Post</p>
      </div>
        <form action="" method="post" onSubmit={handleUpdate} className='grid grid-cols-5 gap-x-6'>
            <input type="text" onChange={handleChenge} value={formData.name} name='name' placeholder='Name'/>
            <input type="number" name="age" onChange={handleChenge} value={formData.age} placeholder='Age'/>
            <select name="gender" id="" onChange={handleChenge} value={formData.gender}>
                <option className=' bg-black' value="M">Male</option>
                <option className='bg-black' value="F">Female</option>
                <option className='bg-black' value="O">Other</option>
            </select>
            <button type="submit" className='mx-2 p-1.5 border rounded-2xl bg-yellow-600'>Update</button>
            <button type="submit" className='mx-2 p-1.5 border rounded-2xl bg-rose-600' onClick={onCancle}>Cancle</button>
        </form>
    </div>
    </div>
    </>
  )
}
