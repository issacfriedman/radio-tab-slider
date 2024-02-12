const radioChecked = document.querySelector(
  ".input-group-animate input[type=radio]:checked"
);
const inputGroups = document.querySelectorAll(".input-group-animate");

const inputGroupParents = Array.from(inputGroups).reduce((acc, inputGroup) => {
  if (!acc.includes(inputGroup.parentElement)) {
    acc.push(inputGroup.parentElement);
  }
  return acc;
}, []);

inputGroupParents?.forEach((parent) => parent.classList.add("radio-group"));

inputGroupParents.forEach((parent) => {
  const background = document.createElement("div");
  background.classList.add("sliding-background");
  parent?.appendChild(background);
});

const radios = inputGroupParents.map((parent) =>
  parent.querySelectorAll(".input-group-animate input[type=radio]")
);

const labels = inputGroupParents.map((parent) =>
  parent.querySelectorAll(".input-group-animate label")
);

console.log(labels);

const moveBackground = (width, position, count, background) => {
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

radios.forEach((radios, radiosIndex) => {
  const background = radios[0]
    .closest(".radio-group")
    .querySelector(".sliding-background");
  console.log("before loop ");
  radios.forEach((radio, i) => {
    radio.dataset.postion = i;
    console.log("radio ", radio, "index ", i);
    radio.addEventListener("change", (e) => {
      if (radio.checked) {
        const width = labels[radiosIndex][i].clientWidth;
        const position = labels[radiosIndex][i].offsetLeft;
        moveBackground(width, position, i, background);
      }
    });
  });
});

if (radioChecked) {
  const postionCount = radioChecked.dataset.postion;
  const width = labels[postionCount].clientWidth;
  const postion = labels[postionCount].offsetLeft;
  moveBackground(width, postion, postionCount);
}
