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
const getBrands = async () => {
  const res = await prisma.brand.findMany()
  return res
}

async function page() {
  const [products, brands] = await Promise.all([getProducts(), getBrands()])
  

  
  return (
    <div className='p-5 '>
        <AddPrisma brands={brands}/>
        <table className="table w-full  ">
        <thead>
          <tr className="items-center">
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
            <td>{product.id}</td>
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