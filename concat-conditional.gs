/**
 * Concatenates a range to one cell if certain conditions are met. Requires values to be present to add
 * them to the string, and requires an additional parameter to equal zero to return a corresponding value.
 *
 * @param {range} input The range to concatenate.
 * @param {separator} input The separator to be used.
 * @param {cond} input A range that should return 0 to return a corresponding item in the range
 * @return The range with a separator.
 * @customfunction
 */

function joinIf(range, separator, cond) {
  result = ""; 
  i=0;
  while (i < range.length) {
    if ((range[i] != 0) && (cond[i] == 0)) {
      result += range[i] + separator;
    }
    i++;
  }
  return result;
}
