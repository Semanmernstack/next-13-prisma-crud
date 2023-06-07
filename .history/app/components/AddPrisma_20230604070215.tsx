"use client"
import React, { FormEvent, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import type {Brand} from "@prisma/client"

function AddPrisma({ brands }: {brands: Brand[]}) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
         await fetch("/api/products", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ title: title, price: price, brandId: brand}),
        })

        setTitle("");
        setPrice("")
        setBrand("");
        setOpen(false)

    }
  return (
    <div className='relative  '>
        <button className='items-center bg-slate-600  justify-center flex cursor-pointer h-screen p-2 animate-pulse shadow-xl' onClick={() => setOpen(true)}>Add New Product</button>
        {open ? (
            <div className="  mx-auto max-w-6xl justify-center items-center inset-0 z-50">
                <form onSubmit={handleSubmit} className=" flex flex-col   decoration-slate-400 p-5 " >
                    <div className='flex flex-col space-y-3 w-full'>
                        <label>Product Name</label>
                        <input className='w-full bg-slate-300 rounded-md outline-none' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-3 w-full'>
                        <label >Price</label>
                        <input className='w-ful bg-slate-300 rounded-md outline-none' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='flex flex-col  space-y-3 w-full'  >
                        <label>Brand</label>
                        <select className="outline-none hover:bg-blue-100" value={brand} onChange={(e) => setBrand(e.target.value)} >
                            <option className='outline-none hover:bg-blue-400' value="" disabled> Select Brand </option>
                            {brands.map((brand) => (
                                <option key={brand.id} className='hover:bg-blue-900' value={brand.id}  >{brand.name}</option>

                            ))}
                            
                        </select>
                    </div>
                    <div className='flex space-x-5 items-center justify-center mt-8'>
                        <button type="button" className='bg-zinc-500 p-1 text-white' onClick={() => setOpen(false)} >Close</button>
                        <button type="submit" className="bg-red-500 p-1"  >Save</button>
                    </div>
            


                </form>

            </div>
        ): (null)}
        
    </div>

  )
}

export default AddPrisma