// function pidor(a, b) {

//     return a + b

// }
// alert(pidor(1, 2))
// var p = "";
// document.getElementById("text").innerHTML = p;
// function handleInput() {
//   var v = document.getElementById("vvod").value;
//   document.getElementById("par").innerText = v;
// }
// function f1() {
//   var p;
//   p = document.getElementById("par");
//   var i = 0;
//   while (i < 50) {
//     i++;
//     p.innerHTML += i + " ";
//   }
// }
var mas = [122, 456, 377];

function show() {
  var p = document.getElementById("par");
  var str = "";

  for (var i = 0; i < mas.length; i++) {
    str += i + "  )  " + mas[i] + "<br>";
  }

  p.innerHTML = str;
}

show();
function f1() {
  var i1 = document.getElementById("i1").value;
  mas.push(i1);
  show();
}
function f2() {
  mas.pop();
  show();
}
