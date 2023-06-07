import { PrismaClient, Product } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient


export async function Post(request: Request) {
    const body: Product  = await request.json()
	const product = await prisma.product.create({
        data: {
            title: body.title,
            price: body.price,
            brandId: body.brandId
        }
    });

    return NextResponse.json(product);
}