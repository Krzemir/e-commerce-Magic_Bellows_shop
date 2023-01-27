import { BadRequestException, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) { }

  getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  getById(id: Order['id']): Promise<Order> | null {
    return this.prismaService.order.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    const { productId, ...otherData } = orderData;

    return await this.prismaService.order.create({
      data: {
        ...otherData,
        product: {
          connect: { id: productId },
        },
      },
    });
  }
}
