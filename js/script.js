function toggleTheme() {
  document.body.classList.toggle("dark");

  const roulette = document.querySelector(".roulette-btn");

  // Ajoute la classe pour démarrer l’animation
  roulette.classList.add("rotate");

  // Retire la classe après la fin de l’animation (0.6s)
  setTimeout(() => {
    roulette.classList.remove("rotate");
  }, 600);
}
