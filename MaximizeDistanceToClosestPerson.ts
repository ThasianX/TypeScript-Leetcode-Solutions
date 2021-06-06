function maxDistToClosest(seats: number[]): number {
  /*
    Given the constraints of the problem, we are guaranteed
    that the minimum distance to the closest person will be
    at least 1.
  */
  let absoluteMax = 1;
  // Represents the closest person seated to the left
  let prev = undefined;

  for (let i = 0; i < seats.length; i++) {
    /* 
      Handles case of [0..., 1, ...] for the start as well as
      [..., 1, 0..., 1, ...]
    */
    if (seats[i] === 1) {
      if (prev === undefined) {
        // The distance from seat 0 to the current is `i`.
        absoluteMax = i;
      } else {
        // Accounts for a seat some place to the right of the known left seat.
        absoluteMax = Math.max(absoluteMax, Math.floor((i - prev) / 2));
      }
      prev = i;
    }
  }

  // Handles case of [..., 1, 0...].
  absoluteMax = Math.max(absoluteMax, Math.floor(seats.length - prev - 1));

  return absoluteMax;
}
