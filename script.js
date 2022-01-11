let courses = ["HTML, CSS", "Javascript", "ReactJS", "NodeJs"];

Array.prototype.forEach2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      callBack(this[i], i, this);
    }
  }
};

Array.prototype.some2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      if (callBack(this[i], i, this)) {
        return true;
      }
    }
  }
};

Array.prototype.every2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      if (!callBack(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
};

Array.prototype.find2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      if (callBack(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  }
};

Array.prototype.filter2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
      if (callBack(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }
};

Array.prototype.map2 = function (callBack) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
      result.push(callBack(this[i], i, this));
    }
    return result;
  }
};

Array.prototype.reduce2 = function (callBack, initialValue) {
  if (typeof callBack === "function") {
    let arrayLength = this.length;
    let i = 1;
    let result = this[0];
    if (arguments.length === 2) {
      result = initialValue;
      i = 0;
    }

    for (; i < arrayLength; i++) {
      result = callBack(result, this[i], i, this);
    }

    return result;
  }
};
