import { PrismaClient, Product } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient


export async function Post(request: Request) {
    const {title, price, brandId}: Product  = await request.json()
	const product = await prisma.product.create({
        data: {
            title: title,
            price: price,
            brandId: brandId,
        }
    });

    return NextResponse.json(product);
}