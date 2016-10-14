/**
 * Counts the instances of a specified value in a specified column
 *
 * @param {itemToCount} input The item to count.
 * @param {range} input The range to count the item in.
 * @return The total count.
 * @customfunction
 */

function countInRange(itemToCount, range) {
  if (itemToCount == 0)
    return 0;
  return range.reduce(function(count, cell) {
    return cell == itemToCount ? count + 1 : count;
  }, 0);
}
