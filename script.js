const games = [
  // ===== ANIME GAMES =====
  { name: "Blox Fruits", category: "Anime", updated: "2026-01-03", codes: [
    { code: "SUB2GAMERROBOT", status: "active" },
    { code: "ADMINHACKED", status: "expired" }
  ]},
  { name: "King Legacy", category: "Anime", updated: "2026-01-02", codes: [
    { code: "UPDATE6", status: "active" },
    { code: "OLDKING", status: "expired" }
  ]},
  { name: "Shindo Life", category: "Anime", updated: "2026-01-01", codes: [
    { code: "RELL2024", status: "active" },
    { code: "SPINOLD", status: "expired" }
  ]},
  { name: "Anime Fighters Simulator", category: "Anime", updated: "2026-01-01", codes: [
    { code: "THANKYOU", status: "active" },
    { code: "RELEASE", status: "expired" }
  ]},
  { name: "Anime Adventures", category: "Anime", updated: "2025-12-30", codes: [
    { code: "HOLIDAY", status: "expired" }
  ]},
  { name: "Anime Dimensions", category: "Anime", updated: "2026-01-02", codes: [
    { code: "DIMBOOST", status: "active" }
  ]},
  { name: "Project Slayers", category: "Anime", updated: "2026-01-03", codes: [
    { code: "PSUPDATE", status: "active" }
  ]},
  { name: "All Star Tower Defense", category: "Anime", updated: "2026-01-01", codes: [
    { code: "ASTD2026", status: "active" }
  ]},
  { name: "Grand Piece Online", category: "Anime", updated: "2025-12-29", codes: [
    { code: "FREEDEVIL", status: "expired" }
  ]},
  { name: "Anime Souls Simulator", category: "Anime", updated: "2026-01-02", codes: [
    { code: "SOULPOWER", status: "active" }
  ]},

  // ===== SIMULATORS =====
  { name: "Pet Simulator X", category: "Simulator", updated: "2026-01-03", codes: [
    { code: "HUGECAT", status: "active" }
  ]},
  { name: "Bee Swarm Simulator", category: "Simulator", updated: "2026-01-02", codes: [
    { code: "BEEBOOST", status: "active" }
  ]},
  { name: "Clicker Simulator", category: "Simulator", updated: "2026-01-01", codes: [
    { code: "CLICKFAST", status: "active" }
  ]},
  { name: "Bubble Gum Simulator", category: "Simulator", updated: "2025-12-28", codes: [
    { code: "BUBBLE", status: "expired" }
  ]},
  { name: "Mining Simulator", category: "Simulator", updated: "2026-01-01", codes: [
    { code: "MINERBOOST", status: "active" }
  ]},
  { name: "Weight Lifting Simulator", category: "Simulator", updated: "2025-12-27", codes: [
    { code: "STRONG", status: "expired" }
  ]},
  { name: "Legends of Speed", category: "Simulator", updated: "2026-01-02", codes: [
    { code: "SPEEDRUN", status: "active" }
  ]},
  { name: "Arm Wrestle Simulator", category: "Simulator", updated: "2026-01-01", codes: [
    { code: "ARMPOWER", status: "active" }
  ]},
  { name: "Strongman Simulator", category: "Simulator", updated: "2026-01-02", codes: [
    { code: "LIFT", status: "active" }
  ]},
  { name: "Eating Simulator", category: "Simulator", updated: "2025-12-26", codes: [
    { code: "FOOD", status: "expired" }
  ]},

  // ===== RP GAMES =====
  { name: "Brookhaven RP", category: "RP", updated: "2026-01-03", codes: [
    { code: "RH2026", status: "active" }
  ]},
  { name: "Adopt Me!", category: "RP", updated: "2025-12-20", codes: [
    { code: "ADOPTLOVE", status: "expired" }
  ]},
  { name: "Bloxburg", category: "RP", updated: "2025-12-18", codes: [
    { code: "WELCOME", status: "expired" }
  ]},
  { name: "MeepCity", category: "RP", updated: "2025-12-15", codes: [
    { code: "MEEPS", status: "expired" }
  ]},
  { name: "Livetopia", category: "RP", updated: "2026-01-02", codes: [
    { code: "LIVE2026", status: "active" }
  ]},
  { name: "Club Roblox", category: "RP", updated: "2025-12-25", codes: [
    { code: "CLUB", status: "expired" }
  ]},
  { name: "RoCitizens", category: "RP", updated: "2026-01-01", codes: [
    { code: "CITY", status: "active" }
  ]},
  { name: "Welcome to Bloxburg RP", category: "RP", updated: "2025-12-22", codes: [
    { code: "BUILD", status: "expired" }
  ]},

  // ===== ACTION / PVP =====
  { name: "Arsenal", category: "Action", updated: "2026-01-03", codes: [
    { code: "ROLVE", status: "active" }
  ]},
  { name: "Jailbreak", category: "Action", updated: "2026-01-03", codes: [
    { code: "SEASON10", status: "active" }
  ]},
  { name: "Tower of Hell", category: "Action", updated: "2025-12-25", codes: [
    { code: "TOH", status: "expired" }
  ]},
  { name: "Murder Mystery 2", category: "Action", updated: "2026-01-01", codes: [
    { code: "MM2WINTER", status: "active" }
  ]},
  { name: "Da Hood", category: "Action", updated: "2025-12-29", codes: [
    { code: "HOOD", status: "expired" }
  ]},
  { name: "Evade", category: "Action", updated: "2026-01-02", codes: [
    { code: "EVADEBOOST", status: "active" }
  ]},
  { name: "Phantom Forces", category: "Action", updated: "2026-01-01", codes: [
    { code: "PF2026", status: "active" }
  ]},
  { name: "BedWars", category: "Action", updated: "2026-01-02", codes: [
    { code: "BWFREE", status: "active" }
  ]},

  // ===== TYCOON / OTHER =====
  { name: "Theme Park Tycoon 2", category: "Tycoon", updated: "2026-01-01", codes: [
    { code: "PARKFUN", status: "active" }
  ]},
  { name: "Retail Tycoon 2", category: "Tycoon", updated: "2026-01-02", codes: [
    { code: "SHOP", status: "active" }
  ]},
  { name: "Restaurant Tycoon 2", category: "Tycoon", updated: "2026-01-01", codes: [
    { code: "FOOD2026", status: "active" }
  ]},
  { name: "Car Dealership Tycoon", category: "Tycoon", updated: "2026-01-02", codes: [
    { code: "CARS", status: "active" }
  ]},
  { name: "Vehicle Simulator", category: "Tycoon", updated: "2025-12-29", codes: [
    { code: "DRIVE", status: "expired" }
  ]}
];

// ===== LOGIC (DO NOT TOUCH) =====
let currentCategory = "All";

function renderGames(list) {
  const container = document.getElementById("games");
  container.innerHTML = "";

  list.forEach(game => {
    if (currentCategory !== "All" && game.category !== currentCategory) return;

    let codesHTML = "";
    game.codes.forEach(c => {
      codesHTML += `
        <div>
          <span class="badge ${c.status === "expired" ? "expired" : ""}">
            ${c.status.toUpperCase()}
          </span>
          <b>${c.code}</b>
          ${c.status === "active"
            ? `<button onclick="copyCode('${c.code}')">Copy</button>`
            : `<button disabled class="expired">Expired</button>`
          }
        </div>
      `;
    });

    container.innerHTML += `
      <div class="card">
        <h3>${game.name}</h3>
        ${codesHTML}
        <div class="updated">Last updated: ${game.updated}</div>
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
  renderGames(games.filter(g => g.name.toLowerCase().includes(value)));
});

renderGames(games);
