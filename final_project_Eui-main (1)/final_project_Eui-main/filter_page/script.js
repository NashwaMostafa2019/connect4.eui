let allBtn = document.querySelector(".all");
let actionBtn = document.querySelector(".action");
let advBtn = document.querySelector(".adv");
let thinkBtn = document.querySelector(".think");
let arrBtn = [allBtn, actionBtn, advBtn, thinkBtn];
let playValo = document.querySelector(".valo");
let playConnect = document.querySelector(".con");
let playuncharted = document.querySelector(".unch");
let playCOD = document.querySelector(".COD");

function filterGames(category) {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").innerText.toLowerCase();
    let gameCategory = "";
    if (title.includes("valorant") || title.includes("call of duty")) {
      gameCategory = "action";
    } else if (title.includes("uncharted")) {
      gameCategory = "adventure";
    } else if (title.includes("connect 4")) {
      gameCategory = "thinking";
    }
    if (category === "all") {
      card.classList.remove("hide");
    } else if (gameCategory === category) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

arrBtn.forEach((button) => {
  button.onclick = function () {
    arrBtn.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    if (this === allBtn) {
      filterGames("all");
    } else if (this === actionBtn) {
      filterGames("action");
    } else if (this === advBtn) {
      filterGames("adventure");
    } else if (this === thinkBtn) {
      filterGames("thinking");
    }
  };
});

let searchBtn = document.getElementById("search-button");

searchBtn.addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").innerText.toLowerCase();
    if (title.includes(searchInput)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
});

playValo.onclick = function () {
  window.open("https://playvalorant.com/ar-ae/", "_blank");
};
playConnect.onclick = function () {
  window.open("../connect4/index.html");
};
playuncharted.onclick = function () {
  window.open("https://www.playstation.com/en-us/games/uncharted-4-a-thiefs-end/", "_blank");
};

playCOD.onclick = function () {
  window.open("https://www.callofduty.com/ar/warzone", "_blank");
};

filterGames("all");
