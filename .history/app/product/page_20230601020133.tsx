import React from 'react'
import AddPrisma from '../components/AddPrisma'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    }
  })
  return res
}

async function page() {
  const products = await getProducts()
  
  
  return (
    <div className='p-5'>
        <AddPrisma/>
        <table className="table w-full items-center">
        <thead>
          <tr className="items-center">
            <th>*</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td>777</td>
          </tr>
        </tbody>
      </table>



    </div>
  )
}

export default page