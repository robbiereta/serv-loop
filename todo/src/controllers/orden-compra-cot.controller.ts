import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  OrdenCompra,
  Cot,
} from '../models';
import {OrdenCompraRepository} from '../repositories';

export class OrdenCompraCotController {
  constructor(
    @repository(OrdenCompraRepository) protected ordenCompraRepository: OrdenCompraRepository,
  ) { }

  @get('/orden-compras/{id}/cots', {
    responses: {
      '200': {
        description: 'Array of OrdenCompra has many Cot',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cot)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Cot>,
  ): Promise<Cot[]> {
    return this.ordenCompraRepository.cots(id).find(filter);
  }

  @post('/orden-compras/{id}/cots', {
    responses: {
      '200': {
        description: 'OrdenCompra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cot)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof OrdenCompra.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cot, {
            title: 'NewCotInOrdenCompra',
            exclude: ['id'],
            optional: ['ordenCompraId']
          }),
        },
      },
    }) cot: Omit<Cot, 'id'>,
  ): Promise<Cot> {
    return this.ordenCompraRepository.cots(id).create(cot);
  }

  @patch('/orden-compras/{id}/cots', {
    responses: {
      '200': {
        description: 'OrdenCompra.Cot PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cot, {partial: true}),
        },
      },
    })
    cot: Partial<Cot>,
    @param.query.object('where', getWhereSchemaFor(Cot)) where?: Where<Cot>,
  ): Promise<Count> {
    return this.ordenCompraRepository.cots(id).patch(cot, where);
  }

  @del('/orden-compras/{id}/cots', {
    responses: {
      '200': {
        description: 'OrdenCompra.Cot DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cot)) where?: Where<Cot>,
  ): Promise<Count> {
    return this.ordenCompraRepository.cots(id).delete(where);
  }
}
