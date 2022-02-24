import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.RDS_HOSTNAME,
  port: Number(process.env.RDS_PORT),
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../entities/*.entity.{js,ts}'],
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/*.ts'],
};

module.exports = typeOrmConfig;
