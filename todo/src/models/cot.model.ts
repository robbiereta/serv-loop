import {Entity, model, property} from '@loopback/repository';

@model()
export class Cot extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  
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

  @property({
    type: 'string',
    required: true,
  })
  moto: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    generated: true,
  })
  ordenCompraId?: string;

  constructor(data?: Partial<Cot>) {
    super(data);
  }
}



export interface CotRelations {
  // describe navigational properties here
}

export type CotWithRelations = Cot & CotRelations;
