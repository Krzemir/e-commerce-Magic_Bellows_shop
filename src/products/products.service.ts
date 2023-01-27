import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) { }

  getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  getById(id: Product['id']): Promise<Product> | null {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
      include: { images: true },
    });
  }
}
