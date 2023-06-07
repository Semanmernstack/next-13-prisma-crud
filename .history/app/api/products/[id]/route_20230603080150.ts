import {  PrismaClient, Product } from "@prisma/client"

const prisma = new PrismaClient()

export async function DELETE(request: Request, {params}: {params: {id:string}}) {
    

    const body = request.json()
    const res = await prisma.product.delete({
        where: {
            id: params.id
        }
    })
   

    return new  Response(
      JSON.stringify({res})
     )
}