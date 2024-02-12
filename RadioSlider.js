class RadioSlider {
  #element = null;
  #radios = null;
  #background = null;
  #width = null;
  #offsetLeft = null;
  #current = {};
  #moveBackgroundCallback = null;
  constructor(element) {
    this.#element = element;
    this.#radios = this.#element?.querySelectorAll('input[type="radio"]');
    this.addClasses();
    this.addBackground();
    this.setEvents();
    this.initCurrent();
  }

  addClasses() {
    this.#radios?.forEach((radio) => {
      radio.parentElement.classList.add("input-group-animate");
    });
  }
  addBackground() {
    const rootElement = this.#element?.querySelector(
      ".input-group-animate"
    ).parentElement;
    rootElement.classList.add("radio-group");
    this.#background = document.createElement("div");
    this.#background.classList.add("sliding-background");
    rootElement?.appendChild(this.#background);
  }
  setEvents() {
    this.#radios?.forEach((radio, i) => {
      radio.addEventListener("change", (e) => {
        if (radio.checked) {
          this.setCurrent(radio);
        }
      });
    });
  }
  moveBackground(callbackFn) {
    if (callbackFn) callbackFn(this.#current);
    this.#background.style.width = this.#width + "px";
    this.#background.style.transform = `translateX(${this.#offsetLeft}px)`;
  }
  initCurrent() {
    this.#radios?.forEach((radio) => {
      if (radio.checked) {
        this.setCurrent(radio);
      }
    });
  }
  setCurrent(current) {
    const label = current.parentElement.querySelector("label");
    this.#current = {
      radio: current,
      label: label,
      background: this.#background,
    };

    this.#width = label.clientWidth;
    this.#offsetLeft = label.offsetLeft;
    this.moveBackground(this.#moveBackgroundCallback);
  }
  changeCallback(fn) {
    this.#moveBackgroundCallback = fn;
    this.initCurrent();
  }
}
