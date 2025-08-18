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

// Export reactive sleep state instead of function
export const getCurrentSleepState = () => currentSleepState.value

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
