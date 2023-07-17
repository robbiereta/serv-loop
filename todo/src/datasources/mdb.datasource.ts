import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mdb',
  connector: 'mongodb',
  url: 'mongodb+srv://Robbie:HhpO3zvURq6Rnzuy@cluster0.c9uqb.mongodb.net/',
  host: 'localhost',
  port: 3000,
  user: 'Robbie',
  password: 'HhpO3zvURq6Rnzuy',
  database: 'testdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
