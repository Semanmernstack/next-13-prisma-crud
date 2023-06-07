import {  PrismaClient, Product } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
   const { title, price, brandId }: Product = await request.json()

   const res = await prisma.product.create({
    data: {
        title: title,
        price: price,
        brandId: Number(brandId)

    }
   })

    
    return new  Response(
      JSON.stringify({res })
     )
}