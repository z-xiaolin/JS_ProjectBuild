(function () {
  function add(num1, num2) {
    return num1 + num2
  }
  console.log(add(23, 56))
})();(function () {
  var arr = [2,3,4].map(function (item, index) {
    return item+1;
  });
  console.log(arr);
})()