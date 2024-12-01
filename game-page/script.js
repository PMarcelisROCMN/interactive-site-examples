const games = [
    {
      title: "Game Title 1",
      description: "This is an action-packed adventure game with stunning visuals.",
      image: "assets/game1_image.png",
    },
    {
      title: "Game Title 2",
      description: "A thrilling puzzle-solving game with captivating storylines.",
      image: "assets/game2_image.png",
    },
    {
      title: "Game Title 3",
      description: "An open-world exploration game with endless possibilities.",
      image: "assets/game3_image.png",
    },
  ];
  
  const gameIcons = document.querySelectorAll(".game-icon");
  const gameImage = document.querySelector(".game-image img");
  const gameTitle = document.querySelector(".game-info h2");
  const gameDescription = document.querySelector(".game-info p");
  
  gameIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const selectedGame = games[index];
      gameImage.src = selectedGame.image;
      gameTitle.textContent = selectedGame.title;
      gameDescription.textContent = selectedGame.description;
    });
  });
  