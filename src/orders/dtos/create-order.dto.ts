import { IsJSON, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  client: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  products: Array<object>;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  totalToPay: number;
}
