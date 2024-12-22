let array = [12, 20, 39, 7, 17, 44];
let another = [18, 99, 27, 13];

const pushMethod = () => {
  array.push(25, 33);
  console.log(`array after push is now ${array}`);
};

const popMethod = () => {
  let array2 = array.pop(25, 33);
  console.log(`array2 after pop is now ${array2}`);
  console.log(`array after pop is now ${array}`);
};

const unshiftMethod = () => {
  array.unshift(40, 36);
  console.log(`array after unshift is now ${array}`);
};

const shiftMethod = () => {
  let array2 = array.shift();
  console.log(`array2 after shift is now ${array2}`);
  console.log(`array after shift is now ${array}`);
};

const sliceMethod = () => {
  let array2 = array.slice(1, 4);
  console.log(`array2 after alice is now ${array2}`);
  console.log(`array after slice is now ${array}`);
};

const spliceMethod = () => {
  array.splice(0, 0, 55);
  console.log(`array after splice is now ${array}`);
};

const mapMethod = () => {
  let array2 = array.map((e) => Math.sqrt(e));
  console.log(`array2 after mapping is now ${array2}`);
  console.log(`array after mapping is now ${array}`);
};

const filterMethod = () => {
  let array2 = array.filter((e) => e > 10);
  console.log(`array2 after filtering is now ${array2}`);
  console.log(`array after filtering is now ${array}`);
};

const someMethod = () => {
  let boolean = array.some((e) => e > 10);
  console.log(`Value of boolean is ${boolean}`);
};

const everyMethod = () => {
  let poppie = array.every((e) => e > 10);
  console.log(typeof poppie);
  console.log(`Value of boolean is ${poppie}`);
  let luan = "h";
  console.log(typeof luan);
};

const fromMethod = () => {
  let name = "LuanPham";
  let array2 = Array.from(name);
  console.log(`array 2 is now ${array2}`);
};

const atMethod = () => {
  let array2 = array.at(2);
  console.log(`array2 is now ${array2}`);
};

const reduceMethod = () => {
  let array2 = array.reduce(
    (accumlator, currentValue) => accumlator + currentValue,
    0
  );
  console.log(`array2 is now ${array2}`);
};

const joinMethod = () => {
  let array2 = array.join(" * ");
  console.log(`array2 is now ${array2}`);
};

const concatMethod = () => {
  let array2 = array.concat(another);
  console.log(`array2 is now ${array2}`);
};

const reverseMethod = () => {
  let array2 = array.reverse();
  console.log(`array2 is now ${array2}`);
};

// pushMethod();
// popMethod();
// unshiftMethod();
// shiftMethod();
// sliceMethod();
// spliceMethod();
// mapMethod();
// filterMethod();
// someMethod();
// everyMethod();
// fromMethod();
// atMethod();
// reduceMethod();
// joinMethod();
// concatMethod();
reverseMethod();
