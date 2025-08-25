
import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@acme/db/schema';
import { DrizzleAsyncProvider } from '@acme/db';
import { eq } from 'drizzle-orm';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const [newProduct] = await this.db.insert(schema.products).values(createProductDto).returning();
    return newProduct;
  }

  async findAll() {
    return this.db.query.products.findMany();
  }

  async findOne(id: string) {
    return this.db.query.products.findFirst({
      where: eq(schema.products.id, id),
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const [updatedProduct] = await this.db.update(schema.products).set(updateProductDto).where(eq(schema.products.id, id)).returning();
    return updatedProduct;
  }

  async remove(id: string) {
    await this.db.delete(schema.products).where(eq(schema.products.id, id));
  }

  async createProductVariant(createProductVariantDto: CreateProductVariantDto) {
    const [newProductVariant] = await this.db.insert(schema.productVariants).values(createProductVariantDto).returning();
    return newProductVariant;
  }

  async findAllProductVariants() {
    return this.db.query.productVariants.findMany();
  }

  async findOneProductVariant(id: string) {
    return this.db.query.productVariants.findFirst({
      where: eq(schema.productVariants.id, id),
    });
  }

  async updateProductVariant(id: string, updateProductVariantDto: UpdateProductVariantDto) {
    const [updatedProductVariant] = await this.db.update(schema.productVariants).set(updateProductVariantDto).where(eq(schema.productVariants.id, id)).returning();
    return updatedProductVariant;
  }

  async removeProductVariant(id: string) {
    await this.db.delete(schema.productVariants).where(eq(schema.productVariants.id, id));
  }
}
