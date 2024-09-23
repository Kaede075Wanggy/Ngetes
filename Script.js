#javascript
  document.getElementById("submitButton").addEventListener("click", function() {
    const playerName = document.getElementById("nameInput").value;

    // Level acak dari 1-100
    const randomLevel = Math.floor(Math.random() * 100) + 1;

    // Daftar ras
    const races = ["Demon", "Beast", "Fairy", "Human", "Angel", "God"];
    const randomRace = races[Math.floor(Math.random() * races.length)];

    // Daftar gelar
    const titles = ["Demon", "Arch Demon", "Demon Lord", "Hero", "Warrior", "Sage", "King", "Queen", "God"];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    // Statistik acak
    const randomAttack = Math.floor(Math.random() * 500) + 50;
    const randomDefense = Math.floor(Math.random() * 500) + 50;
    const randomAgility = Math.floor(Math.random() * 300) + 30;
    const randomMagic = Math.floor(Math.random() * 400) + 40;

    // Tampilkan data pada status window
    document.getElementById("playerName").textContent = playerName;
    document.getElementById("level").textContent = randomLevel;
    document.getElementById("race").textContent = randomRace;
    document.getElementById("title").textContent = randomTitle;
    document.getElementById("attack").textContent = randomAttack;
    document.getElementById("defense").textContent = randomDefense;
    document.getElementById("agility").textContent = randomAgility;
    document.getElementById("magic").textContent = randomMagic;

    // Tampilkan status window
    document.getElementById("statusWindow").style.display = "block";
});
