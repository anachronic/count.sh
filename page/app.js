let counterValue = 0;

function increment() {
  const counter = document.querySelector("#counter");

  counterValue++;
  counter.textContent = `${counterValue}`;
}

function decrement() {
  const counter = document.querySelector("#counter");

  counterValue--;
  counter.textContent = `${counterValue}`;
}
