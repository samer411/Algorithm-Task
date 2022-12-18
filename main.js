let arr = [];
let before = document.getElementById("before");
let result = document.getElementById("result");
function getArr() {
  let arr = [];
  let input = document.getElementsByName("array[]");
  for (var i = 0; i < input.length; i++) {
    arr.push(Number(input[i].value));
    document.createElement("p");
  }
  before.innerHTML = "Before : [" + arr + "]";
  insertionSort(arr, 8);
  result.innerHTML = "After  : [" + arr + "]";
}

function insertionSort(items) {
  let len = items.length, //number of the items in the array
    value, //the value currently being compated
    i, //index into unsorted section
    j; //index into sorted section

  for (i = 0; i < len; i++) {
    value = items[i];

    console.log("key" + value);
    console.log("outer" + i);
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
      let p = document.createElement("p");
      let text = document.createTextNode(
        `Array = ${items} || key = ${value} || i = ${i} || j = ${j}`
      );
      p.appendChild(text);
      before.appendChild(p);
    }
    items[j + 1] = value;
  }
  return items;
}
