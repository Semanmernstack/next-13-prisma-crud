"use client"
import React, { useState } from 'react'

function AddPrisma() {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [open, setOpen] = useState(true)

    const handleOpen = () => {
        setOpen(false)
    }
  return (
    <div className=' mx-auto max-w-7xl'>
        <button onClick={handleOpen}>Add New Product</button>
        <form className=" flex flex-col items-center justify-center w-full  decoration-slate-400 p-5 z-50" >
            <div className='flex flex-col space-y-3'>
                <label>Product Name</label>
                <input className='w-full bg-slate-500 rounded-md outline-none' type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-3'>
                <label >Price</label>
                <input className='w-ful' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-3 w-full'  >
                <label>Brand</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} >
                    <option value="" disabled>Brand 1</option>
                    <option value="">Brand 2</option>
                </select>
            </div>
            


        </form>
    </div>

  )
}

export default AddPrisma