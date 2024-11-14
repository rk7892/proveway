const productBoxes = document.querySelectorAll(".product-box");
const radioButtons = document.querySelectorAll(".radio-custom");
const totalElement = document.querySelector(".total");

const prices = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

productBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    productBoxes.forEach((b) => {
      b.querySelector(".content").classList.remove("expanded");
      b.querySelector(".radio-custom").classList.remove("selected");
      b.classList.remove("selected");
    });

    this.querySelector(".content").classList.add("expanded");
    this.querySelector(".radio-custom").classList.add("selected");
    this.classList.add("selected");

    const units = this.dataset.units;
    totalElement.textContent = `Total: $${prices[units].toFixed(2)} USD`;
  });
});

const twoUnitBox = document.querySelector('[data-units="2"]');
twoUnitBox.click();

const addToCartBtn = document.querySelector(".add-to-cart");
const successAlert = document.getElementById("successAlert");

addToCartBtn.addEventListener("click", () => {
  successAlert.classList.add("show");

  setTimeout(() => {
    successAlert.classList.remove("show");
  }, 2000);
});
