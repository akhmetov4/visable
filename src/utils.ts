export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`350`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
export function debounce(
  func: (...args: any) => any,
  wait = 350,
  immediate = false
) {
  let timeout: string | number | NodeJS.Timeout | null | undefined;
  let args: any[] | null;
  let context: null;
  let timestamp: number;
  let result: any;

  function later() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = null;
        args = null;
      }
    }
  }

  const debounced = function debounceWrapper(this: any, ...innerArgs: any[]) {
    context = this;
    args = innerArgs;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };

  debounced.clear = function debounceClear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function debounceFlush() {
    if (timeout) {
      result = func.apply(context, args);
      context = null;
      args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
