const cc = new ContrastColor();

const slider1 = document.querySelector("[data-radio-slider]");
const slider1obj = new RadioSlider(slider1);

const slider2 = document.querySelector("[data-radio-slider-2]");
const slider2obj = new RadioSlider(slider2);

const lables1 = slider1.querySelectorAll("label");
const lables2 = slider2.querySelectorAll("label");

slider1obj.changeCallback(({ label, background }) => {
  background.style.background = label.textContent;
  const color = cc.contrastColor({
    bgColor: colourNameToHex(label.textContent),
  });
  lables1.forEach((label) => {
    label.style.color = "";
  });
  label.style.color = color;
});
slider2obj.changeCallback(({ label, background }) => {
  background.style.background = label.textContent;
  const color = cc.contrastColor({
    bgColor: colourNameToHex(label.textContent),
  });
  lables2.forEach((label) => {
    label.style.color = "";
  });
  label.style.color = color;
});
