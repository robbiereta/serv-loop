import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MdbDataSource} from '../datasources';
import {Cot, CotRelations} from '../models';

export class CotRepository extends DefaultCrudRepository<
  Cot,
  typeof Cot.prototype.id,
  CotRelations
> {
  constructor(
    @inject('datasources.mdb') dataSource: MdbDataSource,
  ) {
    super(Cot, dataSource);
  }
}
