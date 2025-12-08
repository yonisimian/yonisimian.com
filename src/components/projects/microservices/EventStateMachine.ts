import type { NodeType } from './types'
import type { MicroservicesSystem } from './MicroservicesSystem'

export type EventState =
  | 'idle'
  | 'logging-in'
  | 'fetching-order'
  | 'removing-inventory'
  | 'completing-order'
  | 'completed'
export type EventStatus = 'success' | 'failed' | null

export interface EventLog {
  message: string
  timestamp: number
}

export class EventStateMachine {
  private currentState: EventState = 'idle'
  private eventLogs: EventLog[] = []
  private eventStatus: EventStatus = null
  private onLog: ((message: string) => void) | null = null
  private system: MicroservicesSystem | null = null

  constructor() {}

  setSystem(system: MicroservicesSystem): void {
    this.system = system
  }

  setOnLog(callback: (message: string) => void): void {
    this.onLog = callback
  }

  getCurrentState(): EventState {
    return this.currentState
  }

  getEventLogs(): EventLog[] {
    return this.eventLogs
  }

  getEventStatus(): EventStatus {
    return this.eventStatus
  }

  isEventActive(): boolean {
    return this.currentState !== 'idle' && this.currentState !== 'completed'
  }

  private log(message: string): void {
    this.eventLogs.push({
      message,
      timestamp: Date.now()
    })
    if (this.onLog) {
      this.onLog(message)
    }
  }

  private hasServiceType(type: NodeType): boolean {
    return this.system?.getElements().some((el) => el.type === type) ?? false
  }

  private maybeKillRandomService(): void {
    // 20% chance of a service failure during event execution
    if (Math.random() < 0.2 && this.system) {
      this.system.killRandomService()
    }
  }

  async triggerEvent(): Promise<void> {
    // Reset state for new event
    this.currentState = 'idle'
    this.eventLogs = []
    this.eventStatus = null

    // State machine: Login flow
    await this.stateLoggingIn()
  }

  private async stateLoggingIn(): Promise<void> {
    this.currentState = 'logging-in'
    this.log('Logging in...')
    this.maybeKillRandomService()
    await this.artificical_delay()

    if (!this.hasServiceType('Account Service')) {
      this.log('Logging failed, aborting task!')
      await this.completeEventFailed()
      return
    }

    await this.stateFetchingOrder()
  }

  private async stateFetchingOrder(): Promise<void> {
    this.currentState = 'fetching-order'
    this.log('Fetching order...')
    this.maybeKillRandomService()
    await this.artificical_delay()

    if (!this.hasServiceType('Order Service')) {
      this.log('Order service unavailable, aborting task!')
      await this.completeEventFailed()
      return
    }

    await this.stateRemovingInventory()
  }

  private async stateRemovingInventory(): Promise<void> {
    this.currentState = 'removing-inventory'
    this.log('Removing item from inventory...')
    this.maybeKillRandomService()
    await this.artificical_delay()

    if (!this.hasServiceType('Inventory Service')) {
      this.log('Inventory is unavailable, aborting task!')
      await this.completeEventFailed()
      return
    }

    await this.stateCompletingOrder()
  }

  private async stateCompletingOrder(): Promise<void> {
    this.currentState = 'completing-order'
    this.log('Completing order...')
    this.maybeKillRandomService()
    await this.artificical_delay()

    if (!this.hasServiceType('Order Service')) {
      this.log('Order service unavailable, aborting task!')
      this.log('Returning item to inventory...')
      await this.completeEventFailed()
      return
    }

    await this.completeEventSuccess()
  }

  private async completeEventSuccess(): Promise<void> {
    this.currentState = 'completed'
    this.eventStatus = 'success'
    this.log('Event completed with status: success!')
  }

  private async completeEventFailed(): Promise<void> {
    this.currentState = 'completed'
    this.eventStatus = 'failed'
    this.log('Event completed with status: failed.')
  }

  private artificical_delay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000))
  }
}
