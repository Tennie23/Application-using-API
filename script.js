// Rick and Morty API: https://rickandmortyapi.com/
// Testing an API

// Function that fetches our characters based on the name from the input field
function fetchMonsters() {
  

  // using Fetch to get the api characters
  fetch(`https://api.open5e.com/monsters/`)
    .then(resp => resp.json())
    .then(data => {
      formatMonsters(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatMonsters(characters) {
  const charDiv = document.getElementById('monsters');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><h2>${character.name}</h2><h3>Challenge Rating :${character.challenge_rating}</h3></div>`;
  });
}



function fetchMonster() {
  const inputValue = document.getElementById('user-input').value;

  // using Fetch to get the api characters
  fetch(`https://api.open5e.com/monsters/?search=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatMonster(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatMonster(characters) {
  const charDiv = document.getElementById('monsters');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><h2>${character.name}</h2><h3>${character.challenge_rating}</h3></div>`;
  });
}


function fetchRaces() {
  

  // using Fetch to get the api characters
  fetch(`https://api.open5e.com/races/`)
    .then(resp => resp.json())
    .then(data => {
      formatRaces(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatRaces(characters) {
  const charDiv = document.getElementById('races');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><h2>${character.name}</h2><h3>${character.age}<br/>${character.alignment}<br/>${character.size}<br/>${character.vision}<br/>${character.traits}</h3></div>`;
  });
}



function fetchRace() {
  const inputValue = document.getElementById('user-input').value;

  // using Fetch to get the api characters
  fetch(`https://api.open5e.com/races/?search=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatRaces(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatRace(characters) {
  const charDiv = document.getElementById('races');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><h2>${character.name}</h2></div>`;
  });
}




function fetchSearch() {
  const inputValue = document.getElementById('user-input').value;

  // using Fetch to get the api characters
  fetch(`https://api.open5e.com/search/?text=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatSearch(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatSearch(characters) {
  const charDiv = document.getElementById('all');
  charDiv.innerHTML = '';

  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><h2>${character.name}</h2></div>`;
  });
}



