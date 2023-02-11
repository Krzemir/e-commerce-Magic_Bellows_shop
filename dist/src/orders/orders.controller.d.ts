import { CreateOrderDTO } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").Order>;
    create(orderData: CreateOrderDTO): Promise<import(".prisma/client").Order>;
}
