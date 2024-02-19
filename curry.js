//this from https://bigfrontend.dev/problem/implement-curry
/**
Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
more to read

https://javascript.info/currying-partials

https://lodash.com/docs/4.17.15#curry
 */

// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // here ...args collects arguments as array (rest)
  return function curried(...args) {
    console.log(
      `lenght args: ${args.length} <> fn: ${
        fn.length
      } with args: ${JSON.stringify(args)}`
    );

    if (args.length >= fn.length) {
      // if yes, we spread args elements to pass into func (spread)
      //using apply to invoke the function
      //   return fn.apply(this, args);
      return fn(...args);
    }

    /* if not, we return a function that collects the next arguments passed in next and 
      we recursively call curried, accumalating and spreading the values of args first and then
      the values of next. next will take into consideration a variable amount of next arguments
      e.g (1, 2) (1) (1,2,3) */
    return function (...nextArgs) {
      //   return curried.apply(this, args.concat(nextArgs));
      return curried.call(this, ...args.concat(nextArgs));
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin()(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));
console.log(curriedJoin(1)(2)(3));
