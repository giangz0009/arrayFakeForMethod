let courses = ["HTML, CSS", "Javascript", "ReactJS", "NodeJs"];

Array.prototype.forEach2 = function (callBack) {
  if (typeof callBack === "function") {
    for (let i in this) {
      if (this.hasOwnProperty(i)) callBack(this[i], i, this);
    }
  }
};

Array.prototype.some2 = function (callBack) {
  if (typeof callBack === "function") {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        if (callBack(this[i], i, this)) {
          return true;
        }
      }
    }
  }
};

Array.prototype.every2 = function (callBack) {
  if (typeof callBack === "function") {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        if (!callBack(this[i], i, this)) {
          return false;
        }
      }
    }
    return true;
  }
};

Array.prototype.find2 = function (callBack) {
  if (typeof callBack === "function") {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        if (callBack(this[i], i, this)) {
          return this[i];
        }
      }
    }
    return undefined;
  }
};

Array.prototype.filter2 = function (callBack) {
  if (typeof callBack === "function") {
    let result = [];
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        if (callBack(this[i], i, this)) {
          result.push(this[i]);
        }
      }
    }
    return result;
  }
};

Array.prototype.map2 = function (callBack) {
  if (typeof callBack === "function") {
    let result = [];
    for (let i in this) {
      if (this.hasOwnProperty(i)) result.push(callBack(this[i], i, this));
    }
    return result;
  }
};

Array.prototype.reduce2 = function (callBack, initialValue) {
  if (typeof callBack === "function") {
    let i = 1;
    let result = this[0];
    if (arguments.length === 2) {
      result = initialValue;
      i = 0;
    }

    for (i in this) {
      if (this.hasOwnProperty(i)) result = callBack(result, this[i], i, this);
    }

    return result;
  }
};

courses.forEach2(function (course) {
  console.log(course);
});
