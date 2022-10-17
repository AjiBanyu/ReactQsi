import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice'
export default function AddProduct() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    // dispatching action , yang di panggil untuk mengubah state yang ada di store dengan memanggil method yang bernama dispatch yang berisi action (update)
    const dispatch = useDispatch();

    const updateProduct = (e) => {
        e.preventDefault();
        dispatch(update({title, value}));
    }

  return (
    <div>
        <form onSubmit={updateProduct} className='box mt-5'>
            <div className='field'>
                <label className='label'>Title</label>
                <div>
                    <input className='input' placeholder='input title' type="Text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />    
                </div>
            </div>
            <div className='field'>
                <label className='label'>value</label>
                <div>
                    <input className='input' placeholder='input value' type="Text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />    
                </div>
            </div>
            <div className='field'>
                <button className='button is-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}
