import { Controller, Dependencies, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AccessMode, CurrentSession, UseShopifyAuth } from '@nestjs-shopify/auth';
import { Session } from '@shopify/shopify-api';
import { Index } from 'nestjs-admin/dist/src/utils/typeormProxy';


@Controller()
// @Dependencies(AppService)
@UseShopifyAuth(AccessMode.Online)
export class AppController {
  constructor(private readonly appService: AppService) {
    this.findAll()
  }

  // this.findAll()
  @Get()
  @Render('index')
  async findAll() {
    const all_products =  await this.appService.findAll(); // Get all products
    const orders =  await this.appService.findOrderAll(); // Get all products
    console.log('all_products',all_products, orders)
    // return all_products; // return the products
  }


  // @Get('products')
  // index(@CurrentSession() session: Session) {
  //   console.log('@CurrentSession')
  // }


  // @Get('products/:id')
  // // Overriding the controller access mode:
  // @UseShopifyAuth(AccessMode.Offline)
  // show(
  //   @CurrentSession() session: Session,
  //   // @Param('id') productId: string
  // ) {
  //   // do something
  // }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
