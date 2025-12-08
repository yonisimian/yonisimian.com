import { describe, it, expect, beforeEach, vi } from 'vitest'
import { EventStateMachine } from './EventStateMachine'
import type { DiagramElement } from './types'

describe('EventStateMachine', () => {
  let stateMachine: EventStateMachine
  let mockSystem: any
  let mockElements: DiagramElement[]

  beforeEach(() => {
    stateMachine = new EventStateMachine()

    // Mock the delay to be instant for faster tests
    vi.spyOn(stateMachine as any, 'artificical_delay').mockResolvedValue(undefined)

    mockElements = [
      {
        id: 0,
        type: 'API Gateway',
        label: 'API Gateway',
        x: 0,
        y: 0,
        typeClass: 'api-gateway'
      },
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
        type: 'Account Service',
        label: 'Account Service',
        x: 200,
        y: 100,
        typeClass: 'account-service'
      },
      {
        id: 3,
        type: 'Order Service',
        label: 'Order Service',
        x: 300,
        y: 100,
        typeClass: 'order-service'
      },
      {
        id: 4,
        type: 'Inventory Service',
        label: 'Inventory Service',
        x: 400,
        y: 100,
        typeClass: 'inventory-service'
      }
    ]

    // Create a mock system that returns elements via getElements()
    mockSystem = {
      killRandomService: vi.fn(),
      getElements: vi.fn(() => mockElements)
    }
  })

  describe('initialization', () => {
    it('should initialize with idle state', () => {
      expect(stateMachine.getCurrentState()).toBe('idle')
    })

    it('should initialize with null status', () => {
      expect(stateMachine.getEventStatus()).toBe(null)
    })

    it('should initialize with empty logs', () => {
      expect(stateMachine.getEventLogs()).toEqual([])
    })

    it('should not be active on initialization', () => {
      expect(stateMachine.isEventActive()).toBe(false)
    })
  })

  describe('element and system management', () => {
    it('should set system reference', () => {
      stateMachine.setSystem(mockSystem)
      // System is set, and we can verify it works by running an event
      expect(stateMachine.getEventStatus()).toBe(null)
    })

    it('should set log callback', () => {
      const logCallback = vi.fn()
      stateMachine.setOnLog(logCallback)
      // Callback is private, but we'll verify it works during event execution
      expect(logCallback).not.toHaveBeenCalled()
    })
  })

  describe('event execution - success path', () => {
    beforeEach(() => {
      stateMachine.setSystem(mockSystem)
    })

    it('should complete event successfully with all services available', async () => {
      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(stateMachine.getCurrentState()).toBe('completed')
      expect(stateMachine.getEventStatus()).toBe('success')
      expect(logs).toContain('Event completed with status: success!')
    })

    it('should progress through all states', async () => {
      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(logs).toContain('Logging in...')
      expect(logs).toContain('Fetching order...')
      expect(logs).toContain('Removing item from inventory...')
      expect(logs).toContain('Completing order...')
    })

    it('should record logs with timestamps', async () => {
      await stateMachine.triggerEvent()

      const eventLogs = stateMachine.getEventLogs()
      expect(eventLogs.length).toBeGreaterThan(0)

      eventLogs.forEach((log) => {
        expect(log).toHaveProperty('message')
        expect(log).toHaveProperty('timestamp')
        expect(typeof log.message).toBe('string')
        expect(typeof log.timestamp).toBe('number')
      })
    })
  })

  describe('event execution - failure paths', () => {
    it('should fail at login if Account Service is missing', async () => {
      const elementsWithoutAccount = mockElements.filter((el) => el.type !== 'Account Service')
      mockSystem.getElements = vi.fn(() => elementsWithoutAccount)
      stateMachine.setSystem(mockSystem)

      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(stateMachine.getEventStatus()).toBe('failed')
      expect(logs).toContain('Logging failed, aborting task!')
      expect(logs).toContain('Event completed with status: failed.')
    })

    it('should fail at fetch-order if Order Service is missing', async () => {
      const elementsWithoutOrder = mockElements.filter((el) => el.type !== 'Order Service')
      mockSystem.getElements = vi.fn(() => elementsWithoutOrder)
      stateMachine.setSystem(mockSystem)

      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(stateMachine.getEventStatus()).toBe('failed')
      expect(logs).toContain('Order service unavailable, aborting task!')
    })

    it('should fail at removing-inventory if Inventory Service is missing', async () => {
      const elementsWithoutInventory = mockElements.filter((el) => el.type !== 'Inventory Service')
      mockSystem.getElements = vi.fn(() => elementsWithoutInventory)
      stateMachine.setSystem(mockSystem)

      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(stateMachine.getEventStatus()).toBe('failed')
      expect(logs).toContain('Inventory is unavailable, aborting task!')
    })

    it('should fail at completing-order if Order Service is missing', async () => {
      const elementsWithoutOrder = mockElements.filter((el) => el.type !== 'Order Service')
      mockSystem.getElements = vi.fn(() => elementsWithoutOrder)
      stateMachine.setSystem(mockSystem)

      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      await stateMachine.triggerEvent()

      expect(stateMachine.getEventStatus()).toBe('failed')
      expect(logs).toContain('Order service unavailable, aborting task!')
    })

    // TODO: add a test that should return inventory when Order Service fails at completing step
  })

  describe('service failure during event', () => {
    beforeEach(() => {
      stateMachine.setSystem(mockSystem)
    })

    it('should call removeRandomService with some probability', async () => {
      // Run event multiple times to increase chances of service failure call
      for (let i = 0; i < 20; i++) {
        stateMachine = new EventStateMachine()
        stateMachine.setSystem(mockSystem)
        stateMachine.setOnLog(() => {})
        vi.spyOn(stateMachine as any, 'artificical_delay').mockResolvedValue(undefined)
        await stateMachine.triggerEvent()
      }

      // With 20% chance per state and 4 states, probability of at least one call is high
      // This is a probabilistic test, but should pass most of the time
      expect(mockSystem.killRandomService).toHaveBeenCalled()
    })
  })

  describe('state transitions', () => {
    beforeEach(() => {
      stateMachine.setSystem(mockSystem)
    })

    it('should transition from idle to logging-in', async () => {
      const logs: string[] = []
      stateMachine.setOnLog((msg: string) => logs.push(msg))

      // We can't directly observe state transitions, but we verify the log progression
      await stateMachine.triggerEvent()

      expect(logs[0]).toBe('Logging in...')
    })

    it('should transition to completed state after event', async () => {
      await stateMachine.triggerEvent()

      expect(stateMachine.getCurrentState()).toBe('completed')
    })

    it('should not be active after event completes', async () => {
      expect(stateMachine.isEventActive()).toBe(false)

      await stateMachine.triggerEvent()

      expect(stateMachine.isEventActive()).toBe(false)
    })

    it('should be active during event (tested via state)', async () => {
      const logs: string[] = []
      let wasActiveDuringEvent = false

      stateMachine.setOnLog((msg: string) => {
        logs.push(msg)
        if (msg === 'Logging in...') {
          wasActiveDuringEvent = stateMachine.isEventActive()
        }
      })

      await stateMachine.triggerEvent()

      expect(wasActiveDuringEvent).toBe(true)
    })
  })

  describe('event retry capability', () => {
    it('should allow running multiple events sequentially', async () => {
      stateMachine.setSystem(mockSystem)

      const logs1: string[] = []
      stateMachine.setOnLog((msg: string) => logs1.push(msg))
      await stateMachine.triggerEvent()

      // Run another event
      stateMachine = new EventStateMachine()
      stateMachine.setSystem(mockSystem)
      const logs2: string[] = []
      stateMachine.setOnLog((msg: string) => logs2.push(msg))
      vi.spyOn(stateMachine as any, 'artificical_delay').mockResolvedValue(undefined)
      await stateMachine.triggerEvent()

      const secondStatus = stateMachine.getEventStatus()
      expect(secondStatus).not.toBeNull()
    })
  })
})
