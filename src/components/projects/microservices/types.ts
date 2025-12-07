export type NodeType =
  | 'User Interface'
  | 'API Gateway'
  | 'Account Service'
  | 'Inventory Service'
  | 'Order Service'

export interface DiagramElement {
  id: number
  type: NodeType
  label: string
  x: number
  y: number
  typeClass: string
  load?: number // percentage: 0-100 (only for service instances, not UI)
}

export interface DiagramEdge {
  a: number
  b: number
}
