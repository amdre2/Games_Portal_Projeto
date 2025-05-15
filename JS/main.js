const games = [
    {
      title: "Hollow Knight",
      description: "Trilhe seu próprio caminho em Hollow Knight! Uma aventura de ação épica por um vasto reino em ruínas de insetos e heróis. Explore cavernas sinuosas, lute contra criaturas contaminadas e faça amizade com insetos bizarros, tudo em um estilo 2D clássico e desenhado à mão.",
      video: "assets/trailers/Hollow Trailer.webm",
      image: "assets/images/Hollow_Knight.webp",
      steam: "https://store.steampowered.com/app/367520/Hollow_Knight/",
      font: "TrajanPro"
    },
    {
      title: "Katana Zero",
      description: "Katana ZERO e um elegante jogo de plataforma de acao neo noir com acao alucinante e combate mortal instantaneo. Corte, corra e manipule o tempo para desvendar seu passado em uma exibicao acrobatica brutal e deslumbrante.",
      video: "assets/trailers/Katana Trailer.webm",
      image: "assets/images/Katana_Zero.webp",
      steam: "https://store.steampowered.com/app/460950/Katana_ZERO/",
      font: "KatanaZero"
    },
    {
      title: "Celeste",
      description: "Ajude Madeline a sobreviver aos seus demônios interiores em sua jornada até o topo da Montanha Celeste, neste jogo de plataforma supercompacto dos criadores de TowerFall. Enfrente centenas de desafios artesanais, descubra segredos tortuosos e desvende o mistério da montanha.",
      video: "assets/trailers/Celeste Trailer.webm",
      image: "assets/images/Celeste.webp",
      steam: "https://store.steampowered.com/app/504230/Celeste/",
      font: "Renogare"
    }
  ];
  
  function changeGame(index) {
    const game = games[index];
    const title = document.getElementById("game-title");
    const desc = document.getElementById("game-description");
    const trailer = document.getElementById("game-trailer");
    const steam = document.getElementById("steam-button");
    const background = document.getElementById("background-overlay");
  
    // Fade out
    title.classList.add("fade");
    desc.classList.add("fade");
    trailer.classList.add("fade");
    background.style.opacity = 0;
  

    setTimeout(() => {
    
      title.textContent = game.title;
      title.style.fontFamily = game.font; 
      desc.textContent = game.description;
      desc.style.fontFamily = game.font; 
      steam.href = game.steam;
      background.style.backgroundImage = `url('${game.image}')`;
  
   
      trailer.pause();
      trailer.removeAttribute("src");
      trailer.load();
      trailer.setAttribute("src", game.video);
      trailer.load();
  
   
      title.classList.remove("fade");
      desc.classList.remove("fade");
      background.style.opacity = 1;
  

      setTimeout(() => {
        trailer.classList.remove("fade");
      }, 100); 
    }, 300);
  }

  window.onload = function () {
    changeGame(0);
  };

