//flexible function with varying signature can take
//then returning any value
type anyFunction = (...args: any[]) => any;

//function take 2 params (func & wait)
//  T has type T which extend anyFunction, so will be flexible & represent the function that want to debounce
//  wait will delay number of time in millisecs
//  the function it self return the T
function _debounce<T extends anyFunction>(func: T, wait: number): T {
  // returning type which correspond with setTimeout, so return type will alway infer to setTimeout
  // the variable will init as undefined
  let timeoutId: ReturnType<typeof setTimeout>;

  return function debounced(this: any, ...args: Parameters<T>): void {
    //clear any prev timeout id
    //ensure the function isn't invoke is it;s been called withoin debounce delay
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  } as any;
}

function dummyFunction(args: string): void {
  console.log(`here exceuted with ${args}`);
}

const dummy = _debounce(dummyFunction, 500);
dummy("A");
dummy("B");
dummy("C");
dummy("D");
dummy("E");

setTimeout(() => {
  dummy("F");
}, 800);
