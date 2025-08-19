export interface BabyActivity {
  id: string
  type: ActivityType
  timestamp: Date
  state?: 'start' | 'end'
}

export enum ActivityType {
  SLEEP = 'sleep',
  FEEDING = 'feeding',
  MEDICINE = 'medicine'
}

export interface ActivityConfig {
  type: ActivityType
  label: string
  icon: string
  colorFrom: string
  colorTo: string
  alternateLabel?: string
  alternateIcon?: string
}
