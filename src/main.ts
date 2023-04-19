import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { DefaultAdminModule } from 'nestjs-admin'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  // app.setViewEngine({
  //   templates: join(__dirname, '..', 'view'),
  // });
  // app.setViewEngine('ejs');
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();





// import { NestFactory } from '@nestjs/core';
// import { json } from 'body-parser';
// import { AppModule } from './app.module';
// import { join } from 'path';

// async function bootstrap() {
//   const jsonParseMiddleware = json();
//   const app = await NestFactory.create<any>(AppModule, { bodyParser: false });


//   app.use((req:any, res:any, next:any) => {
    
//     // NOTE: Make sure this is the same `path` you pass to the `ShopifyWebhookModule`.
//     // Webhook is not working rightnow
//     if (req.path.indexOf('/webhooks') === 0) {
//       next();
//     } else {
//       jsonParseMiddleware(req, res, next);
//     }
//   });
 

//   await app.listen(3000);
//   console.log(`Application is running on: ${await app.getUrl()}`);
// }
// bootstrap();


// // import { NestFactory } from '@nestjs/core';
// // import { AppModule } from './app.module';

// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(3000);
// // }
// // bootstrap();
