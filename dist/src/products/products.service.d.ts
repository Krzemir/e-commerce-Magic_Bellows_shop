import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product> | null;
}
