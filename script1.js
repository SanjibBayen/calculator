const screen = document.getElementById("screen");
console.log(screen.value);

function ShowToscreen(input) {
  screen.value += input;
}
function CLEAR() {
  screen.value = "";
}
function Calutate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}
function del() {
  let screenstr = screen.value;
  if (screenstr.length > 0) {
    screen.value = screenstr.slice(0, -1);
  }
}
