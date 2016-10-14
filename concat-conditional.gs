/**
 * Concatenates a range to one cell if certain conditions are met. Requires values to be present to add
 * them to the string, and requires an additional parameter to equal zero to return a corresponding value.
 *
 * @param {range} input The range to concatenate.
 * @param {separator} input The separator to be used.
 * @param {condRange} input A range that should return 0 to return a corresponding item in the range
 * @return The range with a separator.
 * @customfunction
 */

function joinIf(range, separator, condRange) {
  var result = range.reduce(function(list, item, index) {
    return ((item != 0) && (condRange[index] == 0)) ? list + item + separator: list;
  }, "");
  return result.slice(0, result.length - separator.length);
}
