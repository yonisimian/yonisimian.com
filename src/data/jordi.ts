import { ref } from 'vue'
import { ActivityType, type BabyActivity } from '/@/types/jordi'

const STORAGE_KEY = 'ronen-baby-monitor-data'

// Create reactive sleep state
const currentSleepState = ref<'awake' | 'sleeping'>('awake')

export const getStoredActivities = (): BabyActivity[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return parsed.map((activity: any) => ({
        ...activity,
        timestamp: new Date(activity.timestamp)
      }))
    }
  } catch (error) {
    console.error('Error loading stored activities:', error)
  }
  return []
}

export const saveActivities = (activities: BabyActivity[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities))
    // Update reactive state whenever we save
    updateSleepState()
  } catch (error) {
    console.error('Error saving activities:', error)
  }
}

// Helper function to update the reactive sleep state
const updateSleepState = (): void => {
  const activities = getStoredActivities()
  const lastSleepActivity = activities.find((activity) => activity.type === ActivityType.SLEEP)

  if (!lastSleepActivity) {
    currentSleepState.value = 'awake'
  } else {
    currentSleepState.value = lastSleepActivity.state === 'start' ? 'sleeping' : 'awake'
  }
}

export const addActivity = (type: ActivityType, state?: 'start' | 'end'): BabyActivity => {
  const activities = getStoredActivities()
  const newActivity: BabyActivity = {
    id: Date.now().toString(),
    type,
    timestamp: new Date(),
    state
  }

  activities.unshift(newActivity)
  saveActivities(activities) // This will trigger updateSleepState()
  return newActivity
}

export const editActivity = (id: string, newTime: string): boolean => {
  if (newTime.length != 5) {
    console.error(`Invalid time format: got ${newTime}, expected HH:MM. Canceling Edit.`)
    return false
  }

  try {
    const activities = getStoredActivities()
    const activityIndex = activities.findIndex((activity) => activity.id === id)

    if (activityIndex === -1) return false

    const activity = activities[activityIndex]
    const currentDate = activity.timestamp

    // Parse the time (HH:MM format)
    const [hours, minutes] = newTime.split(':').map(Number)

    // Create new timestamp with same date but new time
    const newTimestamp = new Date(currentDate)
    newTimestamp.setHours(hours, minutes, 0, 0)

    // Update the activity
    activities[activityIndex] = {
      ...activity,
      timestamp: newTimestamp
    }

    // Sort activities by timestamp (newest first)
    activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

    saveActivities(activities)
    return true
  } catch (error) {
    console.error('Error editing activity:', error)
    return false
  }
}

export const getActivityConfig = (type: ActivityType) => {
  return activityConfigs.find((config) => config.type === type)!
}

export const getActivityLabel = (activity: BabyActivity) => {
  const config = getActivityConfig(activity.type)
  if (activity.type === ActivityType.SLEEP) {
    return activity.state === 'start' ? config.label : config.alternateLabel || 'Wake Up'
  }
  return config.label
}

export const formatActivityTime = (timestamp: Date) => {
  return timestamp.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const formatRelativeTime = (timestamp: Date) => {
  const now = new Date()
  const diff = now.getTime() - timestamp.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'Just now'
}

export const deleteActivity = (id: string): boolean => {
  try {
    const activities = getStoredActivities()
    const filteredActivities = activities.filter((activity) => activity.id !== id)
    saveActivities(filteredActivities) // This will trigger updateSleepState()
    return true
  } catch (error) {
    console.error('Error deleting activity:', error)
    return false
  }
}

// Export reactive ref for components that need reactivity
export const useSleepState = () => currentSleepState

// Initialize sleep state on module load
updateSleepState()

export const activityConfigs = [
  {
    type: ActivityType.SLEEP,
    label: 'Sleep',
    icon: 'i-ph-moon',
    color: 'bg-purple-500',
    alternateLabel: 'Wake Up',
    alternateIcon: 'i-ph-sun'
  },
  {
    type: ActivityType.FEEDING,
    label: 'Feeding',
    icon: 'i-ph-baby',
    color: 'bg-green-500'
  },
  {
    type: ActivityType.MEDICINE,
    label: 'Medicine',
    icon: 'i-ph-pill',
    color: 'bg-red-500'
  }
]
