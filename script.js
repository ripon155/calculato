let input = document.getElementById("input");
let clearAll = document.getElementById("all-clear");
let clear = document.getElementById("clear");

let numbers = document.querySelectorAll(".number");
var string = "";

numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    console.log(e.target.value);
    if (e.target.value == "=") {
      string = eval(string);
      input.textContent = string;
    } else {
      string = string + e.target.value;
      input.textContent = string;
    }
  });
});

clearAll.addEventListener("click", function () {
  input.textContent = "";
  string = "";
});

clear.addEventListener("click", function () {
  input.textContent = "";
  string = "";
});
