import type { DiagramElement } from './types'

export const apiGatewayElement: DiagramElement = {
  id: 0,
  type: 'API Gateway',
  label: 'API Gateway',
  x: 400,
  y: 250,
  typeClass: 'api-gateway'
}

export const element_width = 140
export const element_height = 56

export const initialElements: DiagramElement[] = [
  apiGatewayElement,
  {
    id: 1,
    type: 'User Interface',
    label: 'User Interface',
    x: 100,
    y: 100,
    typeClass: 'user-interface'
  },
  {
    id: 2,
    type: 'User Interface',
    label: 'User Interface',
    x: 100,
    y: 400,
    typeClass: 'user-interface'
  },
  {
    id: 3,
    type: 'Account Service',
    label: 'Account Service + DB',
    x: 700,
    y: 100,
    typeClass: 'account-service'
  },
  {
    id: 4,
    type: 'Inventory Service',
    label: 'Inventory Service + DB',
    x: 700,
    y: 250,
    typeClass: 'inventory-service'
  },
  {
    id: 5,
    type: 'Order Service',
    label: 'Order Service + DB',
    x: 700,
    y: 400,
    typeClass: 'order-service'
  }
]

export default { apiGatewayElement, initialElements, element_width, element_height }
