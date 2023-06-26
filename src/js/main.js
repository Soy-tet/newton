const innerOutput = document.getElementById("output");
const getinput = document.getElementById("input");
const btn = document.getElementById("body");
function derivative(f, x) {
  const h = 0.00000001;
  return (f(x + h) - f(x)) / h;
}
function f(x) {
  return x*x*x - 7*x*x + 8*x - 3 ;
}
setInterval(() => {
  getinput.value = f;
}, 800);
let x = 1;
let x5 = false;
console.log("1). បញ្ចូលអនុគមន៍ដោយ Follow ទៅតាម Syntax ខាងក្រោម. ")
console.log("2). សូមធ្វើការបញ្ចូលអនុគមន៍នៅក្នុង Statment. ")
console.log(
  "function f(x){ " +
  "return (statment) }"
);
console.log("");
const container = document.getElementById("container2");
const div = document.createElement("h3");
const div2 = document.createElement("h3");
const div3 = document.createElement("h3");
container.appendChild(div);
container.appendChild(div2);
container.appendChild(div3);
div.setAttribute("id", "main");
div2.setAttribute("id", "main2");
div3.setAttribute("id", "main3");
let sg = document.getElementById("main");
let sg2 = document.getElementById("main2");
let sg3 = document.getElementById("main3");
function findx() {
  for (let index = 0; index < 83; index++) {
    let timer = setTimeout(() => {
      let xo = x;
      x = xo - f(xo) / derivative(f, xo);
      let subtract = (x - xo) + 0.00000100010001;
      sg.innerHTML += x;
      sg.innerHTML += "<br>";
      sg2.innerHTML += subtract;
      sg2.innerHTML += "<br>";
      sg3.innerHTML += index;
      sg3.innerHTML += "<br>";
      container.scrollTop = container.scrollHeight;
      // console.log(x-xo);
    }, index * 80);
  }
  btn.style.cursor = "progress";
  setTimeout(() => {
    btn.style.cursor = "auto";
  }, 9000);
}
function reset(){
  location.reload();
}
