import { activityConfigs } from '/@/data/jordi'
import { ActivityType, BabyActivity } from '/@/types/jordi'

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

export const getActivityLabel = (activity: BabyActivity) => {
  const config = activityConfigs.find((config) => config.type === activity.type)!
  if (activity.type === ActivityType.SLEEP) {
    return activity.state === 'start' ? config.label : config.alternateLabel || 'Wake Up'
  }
  return config.label
}
