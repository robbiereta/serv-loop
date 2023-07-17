import {Entity, model, property} from '@loopback/repository';

@model()
export class Cot extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreCliente: string;

  @property({
    type: 'number',
    required: true,
  })
  anio: number;


  constructor(data?: Partial<Cot>) {
    super(data);
  }
}

export interface CotRelations {
  // describe navigational properties here
}

export type CotWithRelations = Cot & CotRelations;
