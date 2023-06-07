"use client"
import React, { useState } from 'react'

function AddPrisma() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("")
  return (
    <div>
        <form >
            <div>
                <label>Title</label>
                <input type="text" value={title} />
            </div>
            <div>
                <label >Price</label>
                <input type="text" value={price} />
            </div>
            <div>
                <label>Brand</label>
                <select >
                    <option value="">Brand 1</option>
                    <option value="">Brand 2</option>
                </select>
            </div>
            


        </form>
    </div>

  )
}

export default AddPrisma