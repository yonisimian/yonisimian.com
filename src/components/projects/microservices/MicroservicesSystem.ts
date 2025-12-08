import { initialElements, apiGatewayElement } from './data'
import type { DiagramElement, NodeType, DiagramEdge } from './types'
import { EventStateMachine } from './EventStateMachine'

export class MicroservicesSystem {
  private elements: DiagramElement[] = []
  private edges: DiagramEdge[] = []
  private consoleMessages: string[] = []
  private loadBalancingEnabled: boolean = false
  private nextId: number = 0
  private eventStateMachine: EventStateMachine

  constructor() {
    this.elements = initialElements.map((el) => ({ ...el }))
    this.nextId = initialElements.length
    this.eventStateMachine = new EventStateMachine()
    this.updateState()
  }

  getElements(): DiagramElement[] {
    return this.elements
  }

  getEdges(): DiagramEdge[] {
    return this.edges
  }

  getConsoleMessages(): string[] {
    return this.consoleMessages
  }

  isLoadBalancingEnabled(): boolean {
    return this.loadBalancingEnabled
  }

  setLoadBalancingEnabled(enabled: boolean): void {
    this.loadBalancingEnabled = enabled
    this.updateState()
  }

  async triggerEvent(): Promise<void> {
    this.eventStateMachine.setElements(this.elements)
    this.eventStateMachine.setOnLog((message: string) => {
      this.consoleMessages.push(message)
    })
    await this.eventStateMachine.triggerEvent()
  }

  addNode(type: NodeType): DiagramElement | null {
    if (type === 'API Gateway') {
      // API Gateway cannot be created dynamically
      return null
    }

    const id = this.nextId++
    const el: DiagramElement = {
      id,
      type,
      label: this.makeLabel(type),
      x: 120 + this.elements.length * 20,
      y: 80 + this.elements.length * 20,
      typeClass: this.typeClassFor(type),
      load: type === 'User Interface' ? undefined : 0
    }

    this.elements.push(el)
    this.updateState()
    return el
  }

  deleteNode(id: number): void {
    if (id === apiGatewayElement.id) return // cannot delete API Gateway
    this.elements = this.elements.filter((e) => e.id !== id)
    this.edges = this.edges.filter((ed) => ed.a !== id && ed.b !== id)
    this.updateState()
  }

  resetState(): void {
    this.elements = initialElements.map((el) => ({ ...el }))
    this.nextId = initialElements.length
    this.updateState()
  }

  clearAll(): void {
    this.elements = [apiGatewayElement]
    this.updateState()
  }

  private updateState(): void {
    this.inferEdges()
    this.calculateLoads()
    this.generateConsoleMessages()
  }

  private makeLabel(type: NodeType): string {
    return `${type}`
  }

  private typeClassFor(type: NodeType): string {
    return type.toLowerCase().replace(/\s+/g, '-')
  }

  private getLoadPercentForType(type: NodeType): number {
    if (type === 'Account Service') return 40
    if (type === 'Inventory Service') return 30
    if (type === 'Order Service') return 20
    return 0
  }

  private inferEdges(): void {
    const apiGatewayElement = this.elements.find((el) => el.type === 'API Gateway')
    if (!apiGatewayElement) return

    this.edges = []
    // all non-gateway nodes should be connected to the gateway
    for (const el of this.elements.filter((e) => e.type !== 'API Gateway')) {
      this.edges.push({ a: apiGatewayElement.id, b: el.id })
    }
  }

  private calculateLoads(): void {
    // Reset all service loads to 0
    for (const el of this.elements) {
      if (el.type !== 'User Interface' && el.type !== 'API Gateway') {
        el.load = 0
      }
    }

    // Count users (UI nodes)
    const users = this.elements.filter((el) => el.type === 'User Interface')

    if (this.loadBalancingEnabled) {
      // Load balancing: distribute load evenly across all services of the same type
      const accountServices = this.elements.filter((el) => el.type === 'Account Service')
      const inventoryServices = this.elements.filter((el) => el.type === 'Inventory Service')
      const orderServices = this.elements.filter((el) => el.type === 'Order Service')

      const accountLoadPerService =
        accountServices.length > 0 ? (users.length * 40) / accountServices.length : 0
      const inventoryLoadPerService =
        inventoryServices.length > 0 ? (users.length * 30) / inventoryServices.length : 0
      const orderLoadPerService =
        orderServices.length > 0 ? (users.length * 20) / orderServices.length : 0

      // Assign evenly distributed load to each service
      accountServices.forEach((s) => {
        s.load = Math.min(accountLoadPerService, 100)
      })
      inventoryServices.forEach((s) => {
        s.load = Math.min(inventoryLoadPerService, 100)
      })
      orderServices.forEach((s) => {
        s.load = Math.min(orderLoadPerService, 100)
      })
    } else {
      // Original behavior: randomly assign to each service type (if instances exist)
      for (const _ of users) {
        const accountServices = this.elements.filter((el) => el.type === 'Account Service')
        const inventoryServices = this.elements.filter((el) => el.type === 'Inventory Service')
        const orderServices = this.elements.filter((el) => el.type === 'Order Service')

        if (accountServices.length > 0) {
          const target = accountServices[Math.floor(Math.random() * accountServices.length)]
          const newLoad = (target.load ?? 0) + this.getLoadPercentForType('Account Service')
          target.load = Math.min(newLoad, 100)
        }
        if (inventoryServices.length > 0) {
          const target = inventoryServices[Math.floor(Math.random() * inventoryServices.length)]
          const newLoad = (target.load ?? 0) + this.getLoadPercentForType('Inventory Service')
          target.load = Math.min(newLoad, 100)
        }
        if (orderServices.length > 0) {
          const target = orderServices[Math.floor(Math.random() * orderServices.length)]
          const newLoad = (target.load ?? 0) + this.getLoadPercentForType('Order Service')
          target.load = Math.min(newLoad, 100)
        }
      }
    }
  }

  private generateConsoleMessages(): void {
    const messagesCountBefore = this.consoleMessages.length

    const users = this.elements.filter((el) => el.type === 'User Interface')
    const accountServices = this.elements.filter((el) => el.type === 'Account Service')
    const inventoryServices = this.elements.filter((el) => el.type === 'Inventory Service')
    const orderServices = this.elements.filter((el) => el.type === 'Order Service')

    // Check for overloaded services (would exceed 100%)
    if (accountServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
      this.consoleMessages.push(
        "There's too much load on the account services, please add a new instance!"
      )
    }
    if (inventoryServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
      this.consoleMessages.push(
        "There's too much load on the inventory services, please add a new instance!"
      )
    }
    if (orderServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
      this.consoleMessages.push(
        "There's too much load on the order services, please add a new instance!"
      )
    }

    // Check for missing services (users with no access to a service type)
    if (users.length > 0 && accountServices.length === 0) {
      this.consoleMessages.push(`There are ${users.length} users with no account service at all!`)
    }
    if (users.length > 0 && inventoryServices.length === 0) {
      this.consoleMessages.push(`There are ${users.length} users with no inventory service at all!`)
    }
    if (users.length > 0 && orderServices.length === 0) {
      this.consoleMessages.push(`There are ${users.length} users with no order service at all!`)
    }

    // If no new messages were added, add a generic "all good" message
    if (
      this.consoleMessages.length === messagesCountBefore &&
      (this.consoleMessages.length === 0 ||
        this.consoleMessages[this.consoleMessages.length - 1] !== 'System stable and running.')
    ) {
      this.consoleMessages.push('System stable and running.')
    }
  }
}
