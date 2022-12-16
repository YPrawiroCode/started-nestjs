import { DataSource, DataSourceOptions } from 'typeorm';
var obj = {};
switch (process.env.NODE_ENV) {
  case 'development':
    obj = Object.assign({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
      migrations: [__dirname + '/migrations/*.ts'],
    });
    break;
  case 'test':
    obj = Object.assign({
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrations: [__dirname + '/migrations/*.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    Object.assign({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: ['**/*.entity.ts'],
      migrations: [__dirname + '/migrations/*.ts'],
      migrationsRun: true,
    });
    break;
  default:
    throw new Error('unknown environment');
}

export const appDataSource = new DataSource(obj as DataSourceOptions);
console.log('🚀 ~ file: data-source.ts:28 ~ obj', obj);

// export const appDataSource = new DataSource({
//   type: 'sqlite',
//   database: `db.sqlite`,
//   entities: ['**/*.entity.ts'],
//   migrations: [__dirname + '/migrations/*.ts'],
// } as DataSourceOptions);
