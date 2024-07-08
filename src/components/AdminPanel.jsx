import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from '../features/card/cardSlice';

const AdminPanel = () => {
    const [title,setTitle]=useState('');
    // const [description,setDescription]=useState('');
    // const [title,setTitle]=useState('');/
    const dispatch = useDispatch();
    // const newcard = {title,description}
    const handleSubmit = (e) =>
    {
        e.preventdefault();
        dispatch(addCard(title))
        // setDescription('')
        setTitle('')
    }

  return (
    <div className='mt-40'>
      <form className='grid grid-rows-3 gap-1 justify-center' onSubmit={handleSubmit}>
        <input type="text" className='row-span-1 caret-pink-600' name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        {/* <input type="text" className='row-span-1' name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/> */}
        {/* <input type="file" className='row-span-1'/> */}
        <button type="submit" className='rounded-full bg-purple-600 mx-9 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>Submit</button>
      </form>
    </div>
  )
}

export default AdminPanel
