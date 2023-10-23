// Funckija izvēlās skaitli no 0 līdz 255 pēc nejaušībass principa
function randomInt() {
    return Math.floor(Math.random() * (255 - 0) + 0);
}

// Funkcija izveido jaunu krāsu kodu (hex)
function newHex() {
    return randomInt() + ', ' + randomInt() + ', ' + randomInt() + ', '
}

// Funkcija nomaina otru (apakšējo) krāsu fona attēlam
function changeGradient() {
    var gradientBg = document.getElementById("gradiant-bg");
    gradientBg.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(' + newHex() + '0.5))';
}