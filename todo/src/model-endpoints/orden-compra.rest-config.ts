import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {OrdenCompra} from '../models';

const config: ModelCrudRestApiConfig = {
  model: OrdenCompra,
  pattern: 'CrudRest',
  dataSource: 'mdb',
  basePath: '/orden-compras',
  readonly: false,
};
module.exports = config;
