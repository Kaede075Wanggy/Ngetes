# Ngetes
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status Window - Anime Fantasi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Masukkan Nama Kamu</h1>
        <input type="text" id="nameInput" placeholder="Nama">
        <button id="submitButton">Tampilkan Status</button>

        <div id="statusWindow" class="status-window" style="display:none;">
            <h2 id="playerName"></h2>
            <p>Level: <span id="level"></span></p>
            <p>Ras: <span id="race"></span></p>
            <p>Gelar: <span id="title"></span></p>
            <p>Attack: <span id="attack"></span></p>
            <p>Defense: <span id="defense"></span></p>
            <p>Agility: <span id="agility"></span></p>
            <p>Magic: <span id="magic"></span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
