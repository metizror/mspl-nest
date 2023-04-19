import { Injectable, Render } from '@nestjs/common';

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'mspl-sheetal.myshopify.com',
  accessToken:'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'
});


@Injectable()
export class AppService {
  constructor() {
  }

  // product count and product list
  async findAll() {
    const all_products = shopify.product.count(); // Get all products
    const pros = shopify.product
      .list({ limit: 5 })
      .then((product: any) => console.log(product))
      .catch((err: any) => console.error(err));
    return `Hello World!`
  }

  async findOrderAll() {
    const all_order = shopify.order.count(); // Get all products
    const pros = shopify.order
      .list({ limit: 5 })
      .then((orders: any) => console.log(orders))
      .catch((err: any) => console.error(err));

    return all_order;
  }

  getHello(): string {
    return `Hello World! ${new Date()}`;
  }
}


