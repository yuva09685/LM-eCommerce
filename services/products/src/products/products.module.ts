
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { drizzleProvider } from '@acme/db';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, drizzleProvider],
})
export class ProductsModule {}
