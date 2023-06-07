import {  PrismaClient, Product } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
   const body: Product = await request.json()

   const res = await prisma.product.create({
    data: {
        title: body.title,
        price: body.price,
        brandId: body.brandId 

    }
   })

    
    return new  Response(
      JSON.stringify({res })
     )
}