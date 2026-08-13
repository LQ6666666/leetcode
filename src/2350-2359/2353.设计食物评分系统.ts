import { PriorityQueue } from "@datastructures-js/priority-queue";

interface RatingInfo {
  food: FoodInfo;
  rating: number;
}

interface FoodInfo {
  name: string;
  cuisine: string;
  del: 0 | 1;
}

class FoodRatings {
  private foodMap: Map<string, FoodInfo>;
  private ratingMap: Map<string, PriorityQueue<RatingInfo>>;

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.ratingMap = new Map();
    this.foodMap = new Map();

    const n = foods.length;
    for (let i = 0; i < n; i++) {
      const food = foods[i];
      const cuisine = cuisines[i];
      const rating = ratings[i];

      const foodObj: FoodInfo = { name: food, cuisine, del: 0 };
      this.foodMap.set(food, foodObj);
      this.getCuisineQueue(cuisine).enqueue({
        food: foodObj,
        rating
      });
    }
  }

  changeRating(food: string, newRating: number): void {
    // 之前的 del 标志设置为 1
    let foodObj = this.foodMap.get(food)!;
    foodObj.del = 1;
    // 入队新的 food
    const queue = this.ratingMap.get(foodObj.cuisine)!;
    this.foodMap.set(food, (foodObj = { name: food, cuisine: foodObj.cuisine, del: 0 }))!;
    queue.enqueue({ food: foodObj, rating: newRating });
  }

  highestRated(cuisine: string): string {
    const queue = this.ratingMap.get(cuisine)!;

    while (queue.size()) {
      const { food } = queue.front()!;
      if (food.del === 1) {
        queue.dequeue();
      } else {
        return food.name;
      }
    }

    return "";
  }

  private getCuisineQueue(cuisine: string) {
    let pq = this.ratingMap.get(cuisine);
    if (!pq) {
      this.ratingMap.set(
        cuisine,
        (pq = new PriorityQueue((a, b) => {
          if (a.rating === b.rating) {
            return a.food.name > b.food.name ? 1 : -1;
          } else {
            return b.rating - a.rating;
          }
        }))
      );
    }
    return pq;
  }
}

export {};
