import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MdbDataSource} from '../datasources';
import {OrdenCompra, OrdenCompraRelations, Cot} from '../models';
import {CotRepository} from './cot.repository';

export class OrdenCompraRepository extends DefaultCrudRepository<
  OrdenCompra,
  typeof OrdenCompra.prototype.id,
  OrdenCompraRelations
> {

  public readonly cots: HasManyRepositoryFactory<Cot, typeof OrdenCompra.prototype.id>;

  constructor(
    @inject('datasources.mdb') dataSource: MdbDataSource, @repository.getter('CotRepository') protected cotRepositoryGetter: Getter<CotRepository>,
  ) {
    super(OrdenCompra, dataSource);
    this.cots = this.createHasManyRepositoryFactoryFor('cots', cotRepositoryGetter,);
    this.registerInclusionResolver('cots', this.cots.inclusionResolver);
  }
}
