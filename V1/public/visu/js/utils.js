Number.prototype.between = function (a, b, inclusive) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return inclusive ? this >= min && this <= max : this > min && this < max;
};

Array.prototype.remove = function (value) {
  for (var i = this.length; i--; ) {
    if (this[i] === value) {
      this.splice(i, 1);
    }
  }
};
