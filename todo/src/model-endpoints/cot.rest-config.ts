import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Cot} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Cot,
  pattern: 'CrudRest',
  dataSource: 'mdb',
  basePath: '/cots',
  readonly: false,
};
module.exports = config;
