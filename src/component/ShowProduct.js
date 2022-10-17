import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowProduct() {
    // useSelector > untuk memanggil data yang ada di store 
    const {title, value} = useSelector(state => state.product)
  return (
    <div className='box mt-5'>
        <div className='title is-4'>title : {title}</div>
        <div className='title is-4'>value : {value}</div>
    </div>
  )
}
