import { computed, ref } from 'vue'
import { ActivityType, type BabyActivity } from '/@/types/jordi'

const STORAGE_KEY = 'ronen-baby-monitor-data'

const getStoredActivities = (): BabyActivity[] => {
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

// computed state

const activities = ref<BabyActivity[]>(getStoredActivities())
const lastSleepActivity = computed(() =>
  activities.value.find((activity) => activity.type === ActivityType.SLEEP)
)
const isCurrentlySleeping = computed(() => {
  if (!lastSleepActivity.value) {
    return true // who cares
  } else {
    return lastSleepActivity.value.state === 'start'
  }
})

// state functions

const saveActivities = (newActivities: BabyActivity[]): void => {
  activities.value = newActivities
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities.value))
  } catch (error) {
    console.error('Error saving activities:', error)
  }
}

const addActivity = (type: ActivityType, state?: 'start' | 'end') => {
  const newActivity: BabyActivity = {
    id: Date.now().toString(),
    type,
    timestamp: new Date(),
    state
  }

  saveActivities([newActivity, ...activities.value])
}

const editActivity = (id: string, newTime: string): boolean => {
  if (newTime.length != 5) {
    console.error(`Invalid time format: got ${newTime}, expected HH:MM. Canceling Edit.`)
    return false
  }

  try {
    const activityIndex = activities.value.findIndex((activity) => activity.id === id)

    if (activityIndex === -1) return false

    const activity = activities.value[activityIndex]
    const currentDate = activity.timestamp

    // Parse the time (HH:MM format)
    const [hours, minutes] = newTime.split(':').map(Number)

    // Create new timestamp with same date but new time
    const newTimestamp = new Date(currentDate)
    newTimestamp.setHours(hours, minutes, 0, 0)

    // Update the activity
    activities.value[activityIndex] = {
      ...activity,
      timestamp: newTimestamp
    }

    // Sort activities by timestamp (newest first)
    activities.value = activities.value.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    )
    saveActivities(activities.value)
    return true
  } catch (error) {
    console.error('Error editing activity:', error)
    return false
  }
}

const deleteActivity = (id: string): boolean => {
  try {
    saveActivities(activities.value.filter((activity) => activity.id !== id))
    return true
  } catch (error) {
    console.error('Error deleting activity:', error)
    return false
  }
}

const getLastActivityOfType = (type: ActivityType): BabyActivity | undefined => {
  return activities.value.find((activity) => activity.type === type)
}

export const useJordi = () => {
  return {
    activities,
    isCurrentlySleeping,
    addActivity,
    editActivity,
    deleteActivity,
    getLastActivityOfType
  }
}

export const activityConfigs = [
  {
    type: ActivityType.SLEEP,
    label: 'Sleep',
    icon: 'i-ph-moon',
    colorFrom: '#667eea', // purple-500
    colorTo: '#764ba2', // indigo-500
    alternateLabel: 'Wake Up',
    alternateIcon: 'i-ph-sun'
  },
  {
    type: ActivityType.FEEDING,
    label: 'Feeding',
    icon: 'i-ph-baby',
    colorFrom: '#10b981', // emerald-500
    colorTo: '#06b6d4' // cyan-500
  },
  {
    type: ActivityType.MEDICINE,
    label: 'Medicine',
    icon: 'i-ph-pill',
    colorFrom: '#ef4444', // red-500
    colorTo: '#f97316' // orange-500
  }
]
