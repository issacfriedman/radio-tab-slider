const labels = document.querySelectorAll(".input-group-animate label");
const radios = document.querySelectorAll(
  ".input-group-animate input[type=radio]"
);

const radioChecked = document.querySelector(
  ".input-group-animate input[type=radio]:checked"
);
const inputGroupParent = document.querySelector(
  ".input-group-animate"
)?.parentElement;

const background = document.createElement("div");
background.classList.add("sliding-background");
inputGroupParent.appendChild(background);

const moveBackground = (width, position, count) => {
  count = Number(count);

  if (count === 0) {
    background.style.background = "#00CC78";
  }
  if (count === 1) {
    background.style.background = "#0096FF";
  }
  if (count === 2) {
    background.style.background = "#FC6C85";
  }
  background.style.width = width + "px";
  background.style.transform = `translate(${position}px)`;
};

radios.forEach((radio, i) => {
  radio.dataset.postion = i;
  radio.addEventListener("change", (e) => {
    if (radio.checked) {
      const width = labels[i].clientWidth;
      const position = labels[i].offsetLeft;
      moveBackground(width, position, i);
    }
  });
});

if (radioChecked) {
  const postionCount = radioChecked.dataset.postion;
  const width = labels[postionCount].clientWidth;
  const postion = labels[postionCount].offsetLeft;
  moveBackground(width, postion, postionCount);
}
