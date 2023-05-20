export default (function Sort() {
  function ascending(a, b, accessor) {
    return a[accessor] - b[accessor];
  }

  function descending(a, b, accessor) {
    return b[accessor] - a[accessor];
  }

  return { ascending, descending };
})();
