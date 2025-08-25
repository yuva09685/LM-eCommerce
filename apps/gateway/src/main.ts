import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: { '^/auth': '' },
    }),
  );

  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: { '^/products': '' },
    }),
  );

  app.use(
    '/users',
    createProxyMiddleware({
      target: 'http://localhost:3003',
      changeOrigin: true,
      pathRewrite: { '^/users': '' },
    }),
  );

  app.use(
    '/orders',
    createProxyMiddleware({
      target: 'http://localhost:3004',
      changeOrigin: true,
      pathRewrite: { '^/orders': '' },
    }),
  );

  app.use(
    '/reviews',
    createProxyMiddleware({
      target: 'http://localhost:3005',
      changeOrigin: true,
      pathRewrite: { '^/reviews': '' },
    }),
  );

  app.use(
    '/notifications',
    createProxyMiddleware({
      target: 'http://localhost:3006',
      changeOrigin: true,
      pathRewrite: { '^/notifications': '' },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
