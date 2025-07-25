import 'react-native-get-random-values'

import Unique from '@data/models/Unique'
import FoodItem from '@store/food/models/FoodItem'
import {v4 as uuidv4} from 'uuid'

export interface Meal extends Unique {
  createdDate: number
  name: string
  food: FoodItem[]
}

export function createMeal(name: string, food: FoodItem[]): Meal {
  return {
    name,
    food,
    createdDate: Date.now(),
    id: uuidv4()
  }
}
