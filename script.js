const games = [
  {name:"Adopt Me!", code:"123456", img:"https://i.ibb.co/fdD4wT6/adoptme.png"},
  {name:"Brookhaven 🏡RP", code:"234567", img:"https://i.ibb.co/Wy7fQJ8/brookhaven.png"},
  {name:"Blox Fruits", code:"345678", img:"https://i.ibb.co/8M3Y1n5/bloxfruits.png"},
  {name:"Tower of Hell", code:"456789", img:"https://i.ibb.co/GcW3n8r/tower.png"},
  {name:"Murder Mystery 2", code:"567890", img:"https://i.ibb.co/2t8g2Zt/murder.png"},
  {name:"Arsenal", code:"678901", img:"https://i.ibb.co/9b5xV7b/arsenal.png"},
  {name:"Pet Simulator X", code:"789012", img:"https://i.ibb.co/2cRVnP9/petx.png"},
  {name:"Shindo Life", code:"890123", img:"https://i.ibb.co/jrkJb2v/shindo.png"},
  {name:"Anime Fighting Simulator", code:"901234", img:"https://i.ibb.co/1T12V6R/animefight.png"},
  {name:"Bee Swarm Simulator", code:"012345", img:"https://i.ibb.co/ZVPgK7H/beeswarm.png"},
  {name:"Dragon Adventures", code:"112233", img:"https://i.ibb.co/1Xrgmzk/dragon.png"},
  {name:"Tower Defense Simulator", code:"223344", img:"https://i.ibb.co/F8n4X9r/tds.png"},
  {name:"Arctic Tycoon", code:"334455", img:"https://i.ibb.co/7YNz4R1/arctic.png"},
  {name:"Work at a Pizza Place", code:"445566", img:"https://i.ibb.co/XxXs0K3/pizza.png"},
  {name:"Funky Friday", code:"556677", img:"https://i.ibb.co/kxVgG8b/funky.png"},
  {name:"Loomian Legacy", code:"667788", img:"https://i.ibb.co/DfZ28gX/loomian.png"},
  {name:"Super Striker League", code:"778899", img:"https://i.ibb.co/0FbP6P0/striker.png"},
  {name:"Ninja Legends", code:"889900", img:"https://i.ibb.co/M8J8kXq/ninja.png"},
  {name:"Tower Blitz", code:"990011", img:"https://i.ibb.co/1rw1CkF/blitz.png"},
  {name:"Bloxburg", code:"101010", img:"https://i.ibb.co/f9RQq0C/bloxburg.png"},
  {name:"Welcome to the Game", code:"121212", img:"https://i.ibb.co/JFSh1Nn/welcome.png"},
  {name:"Bee Simulator", code:"131313", img:"https://i.ibb.co/dmZf6Pv/beesim.png"},
  {name:"Flood Escape 2", code:"141414", img:"https://i.ibb.co/Br0mG5K/flood.png"},
  {name:"Roblox High School 2", code:"151515", img:"https://i.ibb.co/cg7HVc0/highschool.png"},
  {name:"Build A Boat", code:"161616", img:"https://i.ibb.co/GH0s6V0/boat.png"},
  {name:"Speed Run 4", code:"171717", img:"https://i.ibb.co/K0rvZ5H/speedrun.png"},
  {name:"Tower of Dread", code:"181818", img:"https://i.ibb.co/4PZ5LQR/towerdread.png"},
  {name:"Robloxian Highschool", code:"191919", img:"https://i.ibb.co/NY0jqkQ/robloxhigh.png"},
  {name:"Theme Park Tycoon 2", code:"202020", img:"https://i.ibb.co/Z2H7c0B/themepark.png"},
  {name:"Pet Simulator 2", code:"212121", img:"https://i.ibb.co/3TnXyT0/petsim2.png"},
  {name:"Jailbreak", code:"222222", img:"https://i.ibb.co/1z7Lw7K/jailbreak.png"},
  {name:"Tower Heroes", code:"232323", img:"https://i.ibb.co/QK0W0kG/towerheroes.png"},
  {name:"Restaurant Tycoon 2", code:"242424", img:"https://i.ibb.co/f0rMZKW/restaurant.png"},
  {name:"Mad City", code:"252525", img:"https://i.ibb.co/mH6wM8N/madcity.png"},
  {name:"Bee Tycoon", code:"262626", img:"https://i.ibb.co/VJgqkjH/beetycoon.png"},
  {name:"Dragon Ball Z RP", code:"272727", img:"https://i.ibb.co/LRZbkpS/dbz.png"},
  {name:"Super Hero Tycoon", code:"282828", img:"https://i.ibb.co/N1yTzZ2/shero.png"},
  {name:"Theme Park Tycoon", code:"292929", img:"https://i.ibb.co/BsTq6W2/themepark2.png"},
  {name:"Roblox High School", code:"303030", img:"https://i.ibb.co/XY7VzMR/highschool2.png"},
  {name:"Legends of Speed", code:"313131", img:"https://i.ibb.co/yFq3QJ7/los.png"},
  {name:"Tower Defense", code:"323232", img:"https://i.ibb.co/XxQ3qC0/td.png"},
  {name:"Speed Run", code:"333333", img:"https://i.ibb.co/0Z1Xr0F/speedrun2.png"},
  {name:"SharkBite", code:"343434", img:"https://i.ibb.co/7XjqR2G/shark.png"},
  {name:"Roblox Top Model", code:"353535", img:"https://i.ibb.co/kH1R6Hz/topmodel.png"},
  {name:"Survive The Killer!", code:"363636", img:"https://i.ibb.co/0Jp9FvY/killergame.png"},
  {name:"MeepCity", code:"373737", img:"https://i.ibb.co/2n7nC7J/meepcity.png"},
  {name:"Natural Disaster Survival", code:"383838", img:"https://i.ibb.co/fd0sH7h/nds.png"},
  {name:"Funky Town", code:"393939", img:"https://i.ibb.co/0VtJZcK/funkytown.png"},
  {name:"Dragon Ball Fighting", code:"404040", img:"https://i.ibb.co/ZV8wL6s/dbf.png"},
  {name:"Anime Fighting Simulator 2", code:"414141", img:"https://i.ibb.co/7XgxQ1Y/anime2.png"},
  {name:"Bee World", code:"424242", img:"https://i.ibb.co/XYZ1234/beeworld.png"},
  {name:"Tower Legends", code:"434343", img:"https://i.ibb.co/KxY7Q1v/towerlegends.png"},
  {name:"Roblox Arsenal 2", code:"444444", img:"https://i.ibb.co/Y8M1v1G/arsenal2.png"},
  {name:"Ultimate Tower", code:"454545", img:"https://i.ibb.co/2tG9F1Y/ultimatetower.png"},
];

const main = document.getElementById('games');

games.forEach((game) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${game.img}" alt="${game.name}">
    <h3>${game.name}</h3>
    <p class="badge">Code: ${game.code}</p>
    <button onclick="copyCode('${game.code}')">Copy Code</button>
  `;
  main.appendChild(card);
});

function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert('Code copied: ' + code);
  });
    }
