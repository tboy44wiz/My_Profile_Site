const modalElement = document.querySelector(".myModal");

function showGreeting() {
  console.log(modalElement.className);
  // modalElement.style.visibility = "visible";
  modalElement.classList.add("showModal");

  console.log(modalElement.className);
}

// document.addEventListener("DOMContentLoaded", function() {

//   setTimeout(function() {
//     modalElement.classList.add("showModal");
//   }, 10000);
// });

window.addEventListener("load", function() {

  setTimeout(function() {
    modalElement.classList.add("showModal");
  }, 10000);
});


class Car {
  constructor(carName, carModel, carColor) {
    this.name = carName;
    this.model = carModel;
    this.color = carColor;
  };

  get getName() {
    return `${this.name} version 2.`;
  };

  set setName(carName) {
    const fullName = `${carName} ${this.model}`
    this.name = fullName;
  }
};

let herCar = new Car("Amina Car", 12345, "Purple");
herCar.model = 67890;
herCar.setName = "Uncle Tee";

console.log(herCar.getName);