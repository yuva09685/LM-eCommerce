
import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateProductVariantDto {
  @IsUUID()
  productId!: string;

  @IsString()
  name!: string;

  @IsString()
  value!: string;

  @IsNumber()
  stock!: number;
}
