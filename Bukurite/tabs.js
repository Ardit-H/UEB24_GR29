const tabButtons = document.querySelectorAll(".tab-butoni");
const citySections = document.querySelectorAll(".qyteti");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".tab-butoni.active")?.classList.remove("active");
    document.querySelector(".qyteti.active")?.classList.remove("active");

    button.classList.add("active");
    document.getElementById(button.dataset.city).classList.add("active");
  });
});
