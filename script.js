const games = [
  { name: "Blox Fruits", category: "Anime", updated: "2026-01-03", codes:[{code:"ADMINHACKED",status:"active"}]},
  { name: "Brookhaven RP", category: "Roleplay", updated: "2025-12-28", codes:[{code:"RH2024",status:"active"}]},
  { name: "Adopt Me", category: "Pets", updated: "2025-10-12", codes:[{code:"SUMMERBREAK",status:"expired"}]},
  { name: "Pet Simulator X", category: "Simulator", updated: "2026-01-01", codes:[{code:"HUGECAT",status:"active"}]},
  { name: "Arsenal", category: "Shooter", updated: "2026-01-03", codes:[{code:"ROLVE",status:"active"}]},
  { name: "Shindo Life", category: "Anime", updated: "2025-11-20", codes:[{code:"RELL2024",status:"expired"}]},
  { name: "King Legacy", category: "Anime", updated: "2026-01-02", codes:[{code:"UPDATE6",status:"active"}]},
  { name: "Anime Fighters", category: "Anime", updated: "2026-01-01", codes:[{code:"UPDATE20",status:"active"}]},
  { name: "Tower of Hell", category: "Obby", updated: "2025-12-18", codes:[{code:"FREESKIN",status:"active"}]},
  { name: "Murder Mystery 2", category: "Mystery", updated: "2025-12-30", codes:[{code:"WINTER2025",status:"expired"}]},
  { name: "Blade Ball", category: "Action", updated: "2026-01-01", codes:[{code:"BALL2026",status:"active"}]},
  { name: "Driving Empire", category: "Racing", updated: "2025-12-22", codes:[{code:"CASH2025",status:"active"}]},
  { name: "Bee Swarm Simulator", category: "Simulator", updated: "2025-12-15", codes:[{code:"HONEYDAY",status:"expired"}]},
  { name: "BedWars", category: "PvP", updated: "2026-01-02", codes:[{code:"BW2026",status:"active"}]},
  { name: "Evade", category: "Horror", updated: "2025-12-20", codes:[{code:"ESCAPE",status:"active"}]},
  { name: "DOORS", category: "Horror", updated: "2026-01-01", codes:[{code:"SCREECH",status:"expired"}]},
  { name: "Funky Friday", category: "Music", updated: "2025-12-10", codes:[{code:"FNF2025",status:"expired"}]},
  { name: "Project Slayers", category: "Anime", updated: "2026-01-01", codes:[{code:"DEMON2026",status:"active"}]},
  { name: "Grand Piece Online", category: "Anime", updated: "2025-12-25", codes:[{code:"GPOFREE",status:"expired"}]},
  { name: "Anime Adventures", category: "Anime", updated: "2026-01-02", codes:[{code:"UPDATE18",status:"active"}]},

  // --- Auto generated style games to reach 100 ---
  ...Array.from({length: 80}, (_, i) => ({
    name: `Roblox Game ${i + 21}`,
    category: ["Action","Simulator","Anime","Obby","RPG"][i % 5],
    updated: "2026-01-01",
    codes: [{ code: `CODE${i+21}`, status: i % 3 === 0 ? "expired" : "active" }]
  }))
];

const container = document.getElementById("games");

function render(list){
  container.innerHTML = "";
  list.forEach(game=>{
    const active = game.codes[0].status === "active";
    container.innerHTML += `
      <div class="card">
        <h2>${game.name}</h2>
        <span class="badge ${active ? "active":"expired"}">${game.codes[0].status.toUpperCase()}</span>
        <p class="code">${game.codes[0].code}</p>
        <p class="updated">Last updated: ${game.updated}</p>
        ${active
          ? `<button onclick="copyCode('${game.codes[0].code}')">Copy Code</button>`
          : `<button class="disabled">Expired</button>`
        }
      </div>
    `;
  });
}

function copyCode(code){
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}

render(games);
const games = [
  {
    name: "Blox Fruits",
    placeId: "2753915549",
    category: "Anime",
    updated: "2026-01-03",
    code: "ADMINHACKED",
    status: "active"
  },
  {
    name: "Brookhaven RP",
    placeId: "4924922222",
    category: "Roleplay",
    updated: "2025-12-28",
    code: "RH2024",
    status: "active"
  },
  {
    name: "Adopt Me",
    placeId: "920587237",
    category: "Pets",
    updated: "2025-10-12",
    code: "SUMMERBREAK",
    status: "expired"
  },
  {
    name: "Pet Simulator X",
    placeId: "6284583030",
    category: "Simulator",
    updated: "2026-01-01",
    code: "HUGECAT",
    status: "active"
  },
  {
    name: "Arsenal",
    placeId: "286090429",
    category: "Shooter",
    updated: "2026-01-03",
    code: "ROLVE",
    status: "active"
  },

  // Auto-generate more games (real-looking)
  ...Array.from({ length: 95 }, (_, i) => ({
    name: `Roblox Game ${i + 6}`,
    placeId: "2753915549",
    category: ["Anime", "Action", "Simulator", "RPG"][i % 4],
    updated: "2026-01-01",
    code: `CODE${i + 6}`,
    status: i % 3 === 0 ? "expired" : "active"
  }))
];

const container = document.getElementById("games");

function render() {
  container.innerHTML = "";
  games.forEach(game => {
    const icon = `https://tr.rbxcdn.com/${game.placeId}/256/256/Image/Png`;

    container.innerHTML += `
      <div class="card">
        <img src="${icon}" class="game-icon" alt="${game.name}">
        <h2>${game.name}</h2>

        <span class="badge ${game.status}">
          ${game.status.toUpperCase()}
        </span>

        <p class="code">${game.code}</p>
        <p class="updated">Last updated: ${game.updated}</p>

        ${
          game.status === "active"
            ? `<button onclick="copyCode('${game.code}')">Copy Code</button>`
            : `<button class="disabled">Expired</button>`
        }
      </div>
    `;
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}

render();
