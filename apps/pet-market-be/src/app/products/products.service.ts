import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findFirst({
      where: { id },
    });
  }

  async searchProducts(term: string): Promise<Product[]> {
    const lowerCaseTerm = term.toLowerCase();
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: lowerCaseTerm,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: lowerCaseTerm,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
  }
}
