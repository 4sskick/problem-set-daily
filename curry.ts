function _curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      //   return fn.apply(this, args);
      return fn(...args);
    } else {
      return function (this: any, ...nextArgs: any[]) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

const _join: Function = (a: any, b: any, c: any) => {
  return `${a}_${b}_${c}`;
};

const _curried = _curry(_join);
console.log(_curried(1, 2, 3));
console.log(_curried()(1, 2, 3));
console.log(_curried(1)(2, 3));
console.log(_curried(1, 2)(3));
console.log(_curried(1)(2)(3));
