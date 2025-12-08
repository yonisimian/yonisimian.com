import { describe, it, expect, beforeEach } from 'vitest'
import { MicroservicesSystem } from './MicroservicesSystem'

describe('MicroservicesSystem', () => {
  let system: MicroservicesSystem

  beforeEach(() => {
    system = new MicroservicesSystem()
  })

  describe('initialization', () => {
    it('should initialize with default elements', () => {
      const elements = system.getElements()
      expect(elements.length).toBeGreaterThan(0)
    })

    it('should have API Gateway in initial elements', () => {
      const elements = system.getElements()
      const hasGateway = elements.some((el) => el.type === 'API Gateway')
      expect(hasGateway).toBe(true)
    })

    it('should initialize with empty console messages or status message', () => {
      const messages = system.getConsoleMessages()
      expect(Array.isArray(messages)).toBe(true)
    })

    it('should have load balancing disabled by default', () => {
      expect(system.isLoadBalancingEnabled()).toBe(false)
    })
  })

  describe('node management', () => {
    it('should add a new User Interface node', () => {
      const initialCount = system.getElements().length
      system.addNode('User Interface')
      expect(system.getElements().length).toBe(initialCount + 1)
    })

    it('should not allow adding API Gateway dynamically', () => {
      const initialCount = system.getElements().length
      const result = system.addNode('API Gateway')
      expect(result).toBeNull()
      expect(system.getElements().length).toBe(initialCount)
    })

    it('should add Account Service node', () => {
      const initialCount = system.getElements().length
      system.addNode('Account Service')
      expect(system.getElements().length).toBe(initialCount + 1)
    })

    it('should add Inventory Service node', () => {
      const initialCount = system.getElements().length
      system.addNode('Inventory Service')
      expect(system.getElements().length).toBe(initialCount + 1)
    })

    it('should add Order Service node', () => {
      const initialCount = system.getElements().length
      system.addNode('Order Service')
      expect(system.getElements().length).toBe(initialCount + 1)
    })

    it('should delete a node by id', () => {
      const element = system.addNode('User Interface')
      expect(element).not.toBeNull()
      const initialCount = system.getElements().length

      system.deleteNode(element!.id)
      expect(system.getElements().length).toBe(initialCount - 1)
    })

    it('should not delete API Gateway', () => {
      const elements = system.getElements()
      const gateway = elements.find((el) => el.type === 'API Gateway')
      expect(gateway).toBeDefined()

      const initialCount = elements.length
      system.deleteNode(gateway!.id)
      expect(system.getElements().length).toBe(initialCount)
    })
  })

  describe('edge management', () => {
    it('should create edges connecting all services to API Gateway', () => {
      system.clearAll()
      system.addNode('User Interface')
      system.addNode('Account Service')
      system.addNode('Order Service')

      const edges = system.getEdges()
      expect(edges.length).toBeGreaterThan(0)
    })

    it('should remove edges when a node is deleted', () => {
      const element = system.addNode('User Interface')
      const initialEdgeCount = system.getEdges().length

      system.deleteNode(element!.id)
      expect(system.getEdges().length).toBeLessThanOrEqual(initialEdgeCount)
    })
  })

  describe('load balancing', () => {
    it('should toggle load balancing', () => {
      expect(system.isLoadBalancingEnabled()).toBe(false)
      system.setLoadBalancingEnabled(true)
      expect(system.isLoadBalancingEnabled()).toBe(true)
      system.setLoadBalancingEnabled(false)
      expect(system.isLoadBalancingEnabled()).toBe(false)
    })

    it('should distribute load evenly when load balancing is enabled', () => {
      system.clearAll()
      system.addNode('User Interface')
      system.addNode('User Interface')
      system.addNode('Account Service')
      system.addNode('Account Service')

      system.setLoadBalancingEnabled(true)

      const elements = system.getElements()
      const accountServices = elements.filter((el) => el.type === 'Account Service')
      const loads = accountServices.map((el) => el.load ?? 0)

      // With even distribution, loads should be equal or very close
      if (loads.length > 1) {
        const allEqual = loads.every((load) => load === loads[0])
        expect(allEqual).toBe(true)
      }
    })

    it('should cap load at 100%', () => {
      system.clearAll()
      for (let i = 0; i < 10; i++) {
        system.addNode('User Interface')
      }
      system.addNode('Account Service')

      const elements = system.getElements()
      const accountService = elements.find((el) => el.type === 'Account Service')
      expect(accountService!.load).toBeLessThanOrEqual(100)
    })
  })

  describe('state management', () => {
    it('should reset to initial state', () => {
      system.addNode('User Interface')
      system.addNode('Account Service')
      const countBeforeReset = system.getElements().length

      system.resetState()
      const countAfterReset = system.getElements().length

      // After reset, should return to initial state (not the modified state)
      expect(countAfterReset).not.toBe(countBeforeReset)
    })

    it('should clear all except API Gateway', () => {
      system.clearAll()
      const elements = system.getElements()
      expect(elements.length).toBe(1)
      expect(elements[0].type).toBe('API Gateway')
    })
  })

  describe('service removal', () => {
    it('should remove a random service when removeRandomService is called', () => {
      system.clearAll()
      system.addNode('Account Service')
      system.addNode('Order Service')
      system.addNode('Inventory Service')

      const initialCount = system.getElements().length
      system.killRandomService()
      expect(system.getElements().length).toBe(initialCount - 1)
    })

    it('should log a console message when a service is removed', () => {
      system.clearAll()
      system.addNode('Account Service')
      const initialMessageCount = system.getConsoleMessages().length

      system.killRandomService()
      const messages = system.getConsoleMessages()
      expect(messages.length).toBeGreaterThan(initialMessageCount)

      const lastMessage = messages[messages.length - 2].text
      expect(lastMessage).toContain('Service failure')
    })

    it('should not remove services if there are none', () => {
      system.clearAll()
      const initialCount = system.getElements().length
      system.killRandomService()
      expect(system.getElements().length).toBe(initialCount)
    })
  })

  describe('console messages', () => {
    it('should return ConsoleMessage array with timestamp', () => {
      const messages = system.getConsoleMessages()
      expect(Array.isArray(messages)).toBe(true)

      if (messages.length > 0) {
        const message = messages[0]
        expect(message).toHaveProperty('text')
        expect(message).toHaveProperty('timestamp')
        expect(typeof message.text).toBe('string')
        expect(typeof message.timestamp).toBe('number')
      }
    })

    it('should generate warning messages for overloaded services', () => {
      system.clearAll()
      system.addNode('User Interface')
      system.addNode('User Interface')
      system.addNode('User Interface')
      system.addNode('Account Service')

      const messages = system.getConsoleMessages()
      const hasWarning = messages.some((msg) => msg.text.includes("There's too much load"))
      expect(hasWarning).toBe(true)
    })

    it('should generate warning for missing services', () => {
      system.clearAll()
      system.addNode('User Interface')

      const messages = system.getConsoleMessages()
      const hasMissingServiceWarning = messages.some((msg) =>
        msg.text.includes('no account service at all')
      )
      expect(hasMissingServiceWarning).toBe(true)
    })
  })

  // TODO: add tests for event triggering
})
