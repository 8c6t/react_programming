const arr = [];

export function func1() {
  console.log('func1', arr.length);
}

export function func2() {
  arr.push(10);
  console.log('func2');
}

func2();