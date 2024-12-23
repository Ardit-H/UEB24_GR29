async function loadPartial(partialUrl, placeholderId) {
  try {
    const response = await fetch(partialUrl);
    const data = await response.text();
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
      throw new Error(`Elementi me ID "${placeholderId}" nuk u gjet ne DOM.`);
    }
    placeholder.innerHTML = data;
  } catch (error) {
    console.error("Error ne loading e pjeseve te faqes", error);
    const placeholder = document.getElementById(placeholderId);
    const massage = document.getElementById("mesazhi");
    if (massage) {
      massage.textContent =
        "Ngarkimi i faqës dështoi. Ju lutemi kontaktoni mirëmbajtesin e Web faqës.";
    } else if (placeholder) {
      placeholder.innerHTML =
        "<p>Ngarkimi i faqës dështoi. Ju lutemi kontaktoni mirëmbajtesin e Web faqës.</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("navbar.html", "navbar-placeholder");
  loadPartial("footer.html", "footer-placeholder");
});
