"use client"
import React, { FormEvent, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import type {Brand} from "@prisma/client"

type Product = {
    id: string;
    title: string;
    price: string;
    brandId: string
}

function DeletePrisma({ product }: {product: Product} ) {
    
    const [open, setOpen] = useState(false)

    const handleDelete = async (productId: string) => {
        
         await fetch(`/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({productId}),
        })

        
        setOpen(false)

    }
  return (
    <div className='relative '>
        <button className='items-center justify-center flex bg-purple-800 p-1 cursor-pointer ' onClick={() => setOpen(true)}>Delete</button>
        {open ? (
            <div className=" text-xs text-white absolute  mx-auto max-w-2xl justify-center items-center top-60 right-0 bottom-0 inset-0 z-100">
                <h1>Are you sure you want to delete {product.id}</h1>
                <div className="space-x-3 text-xs">
                    <button type='button'>No</button>
                    <button type='button' onClick={() => handleDelete(product.id)}>Yes</button>
                </div>

            </div>
        ): (null)}
        
    </div>

  )
}

export default DeletePrisma