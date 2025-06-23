export type IngredientsList = {
  title: string
  ingredients: string[]
}

export type Recipe = {
  title: string
  description?: string
  ingredients: IngredientsList[]
  steps?: string[]
  notes?: string
}
