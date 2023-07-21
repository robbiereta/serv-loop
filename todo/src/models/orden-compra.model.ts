import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cot,CotWithRelations} from './cot.model';

@model()
export class OrdenCompra extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  numTicket: string;



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
