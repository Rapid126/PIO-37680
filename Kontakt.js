  const form = document.querySelector("form");
  const message = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // zapobiegamy faktycznemu wysłaniu
    message.style.display = "block"; // pokazujemy wiadomość
    form.reset(); // czyścimy formularz

    // Automatyczne ukrycie po 4 sekundach (opcjonalne)
    setTimeout(() => {
      message.style.display = "none";
    }, 4000);
  });

