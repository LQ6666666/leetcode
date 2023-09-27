function filterRestaurants(
  restaurants: [
    id: number,
    rating: number,
    veganFriendly: 1 | 0,
    price: number,
    distance: number
  ][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  // 过滤 veganFriendly
  if (veganFriendly === 1) {
    restaurants = restaurants.filter(([, , veganFriendly]) => veganFriendly === 1);
  }
  // 过滤 price 和 distance
  restaurants = restaurants.filter(
    ([, , , price, distance]) => price <= maxPrice && distance <= maxDistance
  );
  // 排序
  restaurants.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });
  return restaurants.map(([id]) => id);
}

export { filterRestaurants };
