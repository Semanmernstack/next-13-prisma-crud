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
    <div className='p-5 bg-zinc-700 h-screen'>
        <AddPrisma  brands={brands}/>
        <table className="table-auto w-full">
        <thead className="bg-purple-600 shadow-black shadow-2xl p-3">
          <tr className="items-center text-center p-3">
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody className=" items-center text-center p-3 bg-slate-400 shadow-xl font-medium ">
          {products.map((product, index) => (
            <tr className="text-sm " key={product.id}>
            <td className="text-xs ">{product.id}</td>
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