import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cot,CotWithRelations} from './cot.model';

@model()
export class OrdenCompra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @hasMany(() => Cot)
  cots: Cot[];

  constructor(data?: Partial<OrdenCompra>) {
    super(data);
  }
}

export interface OrdenCompraRelations {
  // describe navigational properties here
  cots?: CotWithRelations[];
}

export type OrdenCompraWithRelations = OrdenCompra & OrdenCompraRelations;
