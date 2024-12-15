document.addEventListener("DOMContentLoaded", () => {
  //merri gjithe elementet me klasen vleresimi
  const vleresimi = document.querySelectorAll(".vleresimi");

  vleresimi.forEach((vleresimiDiv) => {
    console.log(vleresimiDiv);
    const yjet = vleresimiDiv.querySelectorAll("label");
    const radios = vleresimiDiv.querySelectorAll('input[type="radio"]');
    let vleraERating = 0;

    radios.forEach((radio) => {
      radio.addEventListener("click", () => {
        const vleraEZgjedhur = radio.value;
        if (vleraEZgjedhur === vleraERating) {
          fshijYjet(yjet);
          radio.checked = false;
          vleraERating = 0;
        } else {
          mbushYjet(yjet, vleraEZgjedhur);
          vleraERating = vleraEZgjedhur;
        }
      });
    });

    function mbushYjet(stars, count) {
      fshijYjet(stars);
      for (let i = 0; i < stars.length; i++) {
        if (i < count) {
          stars[i].classList.add("filled");
        }
      }
    }

    function fshijYjet(yjet) {
      yjet.forEach((ylli) => ylli.classList.remove("filled"));
    }
  });
});
