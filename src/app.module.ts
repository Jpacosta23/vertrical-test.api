import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import '../env';
let typeOrmConfig = {};

typeOrmConfig = require('./config/typeorm.config');

@Module({
  imports: [
    PhotosModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
