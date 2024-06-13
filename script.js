const textContainer = document.querySelector(".text");
const speedInput = document.querySelector("#speed");
const textArray = [];
let speed = 1;
let index = 0;

const text = textContainer.textContent;
textContainer.innerHTML = "";
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.textContent = text[i];
  textArray.push(span);
}

let interval = setInterval(() => {
  textContainer.appendChild(textArray[index]);
  index++;
  if (index > textArray.length) {
    setTimeout(() => {
      index = 0;
      textContainer.innerHTML = "";
    }, 1000);
  }
}, 1000);

speedInput.addEventListener("input", () => {
  clearInterval(interval);
  speed = speedInput.value;
  if (speed < 1) {
    speed = 1;
  } else if (speed > 10) {
    speed = 10;
  }
  interval = setInterval(() => {
    textContainer.appendChild(textArray[index]);
    index++;
    if (index > textArray.length - 1) {
      setTimeout(() => {
        index = 0;
        textContainer.innerHTML = "";
      }, 1000 / speed);
    }
  }, 1000 / speed);
});
