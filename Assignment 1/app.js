console.log('hello world');

// Fibonacci Function

function fibs(num) {
  let fibArr = [];
  for (let i = 0; i < num; i++) {
    fibLoop(i);
  }
  function fibLoop(item) {
    let a = 1;
    let b = 0;
    for (let i = 0; i < item; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    fibArr.push(b);
  }
  console.log(fibArr);
}

fibs(8);

// Fibonacci Function Recursive

function fibsRec(num) {
  let fibArr = [];
  for (let i = 0; i < num; i++) {
    fibArr.push(fibLoopRec(i));
  }
  function fibLoopRec(item) {
    if (item < 2) {
      return item;
    } else {
      return fibLoopRec(item - 1) + fibLoopRec(item - 2);
    }
  }
  console.log(fibArr);
}

fibsRec(8);
