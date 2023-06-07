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
  console.log(products)

  
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
          {products.map((product, index) => (
            <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.brand.name}</td>
          </tr>

          ))}
          
        </tbody>
      </table>



    </div>
  )
}

export default page