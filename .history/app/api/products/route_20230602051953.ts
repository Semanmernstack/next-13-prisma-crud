import {  PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
   const { title, price, brand } = await request.json()

   const res = await prisma.product.create({
    data: {
        title: title,
        price: price,
        brand: brand,

    }
   })

    
    return new  Response(
      JSON.stringify({res })
     )
}