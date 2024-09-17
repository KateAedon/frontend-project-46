export default function genDiff(obj1, obj2) {


const keys = Object.keys(obj1).concat(Object.keys(obj2));

const uniqueKeys = [];
for (const key of keys) {
  if (!uniqueKeys.includes(key)) {
    uniqueKeys.push(key);
  }
}

console.log(uniqueKeys, "keys");

}