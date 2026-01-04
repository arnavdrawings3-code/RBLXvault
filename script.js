const games = [
  {
    name: "Blox Fruits",
    code: "ADMINHACKED",
    category: "Anime",
    status: "active",
    updated: "2026-01-02"
  },
  {
    name: "Brookhaven RP",
    code: "RH2024",
    category: "RP",
    status: "active",
    updated: "2025-12-28"
  },
  {
    name: "Adopt Me",
    code: "SUMMERBREAK",
    category: "RP",
    status: "expired",
    updated: "2025-10-12"
  },
  {
    name: "Pet Simulator X",
    code: "HUGECAT",
    category: "Simulator",
    status: "active",
    updated: "2026-01-01"
  },
  {
    name: "Shindo Life",
    code: "RELL2024",
    category: "Anime",
    status: "expired",
    updated: "2025-11-20"
  },
  {
    name: "Arsenal",
    code: "ROLVE",
    category: "Action",
    status: "active",
    updated: "2026-01-03"
  }
];

let currentCategory = "All";

function renderGames(list) {
  const container = document.getElementById("games");
  container.innerHTML = "";

  list.forEach(game => {
    if (currentCategory !== "All" && game.category !== currentCategory) return;

    container.innerHTML += `
      <div class="card">
        <h3>${game.name}</h3>
        <span class="badge ${game.status === "expired" ? "expired" : ""}">
          ${game.status.toUpperCase()}
        </span>
        <p><b>${game.code}</b></p>
        <div class="updated">Last updated: ${game.updated}</div>
        ${
          game.status === "active"
          ? `<button onclick="copyCode('${game.code}')">Copy Code</button>`
          : `<button disabled class="expired">Expired</button>`
        }
      </div>
    `;
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Copied: " + code);
}

function filterCategory(cat) {
  currentCategory = cat;
  renderGames(games);
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = games.filter(g => g.name.toLowerCase().includes(value));
  renderGames(filtered);
});

renderGames(games);
