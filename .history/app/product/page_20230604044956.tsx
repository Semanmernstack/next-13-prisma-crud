import React from 'react'
import AddPrisma from '../components/AddPrisma'
import { PrismaClient } from "@prisma/client"
import DeletePrisma from '../components/DeletePrisma'

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
        <thead className="">
          <tr className="">
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody className=" flex flex-col">
          {products.map((product, index) => (
            <tr className="text-sm " key={product.id}>
            <td className="text-xs truncate">{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.brand.name}</td>
            <td>
              <DeletePrisma  product={product}/>
            </td>
          </tr>

          ))}
          
          
        </tbody>
      </table>

          

    </div>
  )
}

export default page