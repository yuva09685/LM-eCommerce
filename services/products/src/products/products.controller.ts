import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Post('variants')
  createVariant(@Body() createProductVariantDto: CreateProductVariantDto) {
    return this.productsService.createProductVariant(createProductVariantDto);
  }

  @Get('variants')
  findAllVariants() {
    return this.productsService.findAllProductVariants();
  }

  @Get('variants/:id')
  findOneVariant(@Param('id') id: string) {
    return this.productsService.findOneProductVariant(id);
  }

  @Put('variants/:id')
  updateVariant(@Param('id') id: string, @Body() updateProductVariantDto: UpdateProductVariantDto) {
    return this.productsService.updateProductVariant(id, updateProductVariantDto);
  }

  @Delete('variants/:id')
  removeVariant(@Param('id') id: string) {
    return this.productsService.removeProductVariant(id);
  }
}