
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return 'This action returns all products';
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  create(createProductDto: any) {
    return 'This action adds a new product';
  }

  update(id: string, updateProductDto: any) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
